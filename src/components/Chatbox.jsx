import { useState } from 'react';
import { Link } from 'react-router-dom';
import chatbotData from '../data/chatbox.json';
import products from '../data/products.json';
import markets from '../data/markets.json';
import '../assets/css/chatbox.css';

function normalizeText(text) {
  return text.toLowerCase();
}

const productChatbotData = products.map((product) => ({
  keywords: [product.name, product.slug],
  answer: `You can find ${product.name} in the Produce Guide.`,
  link: `/produce-guide?search=${encodeURIComponent(product.name)}`,
  linkText: `View ${product.name}`
}));

const marketChatbotData = markets.map((market) => ({
  keywords: [market.name, market.slug],
  answer: `View details and opening hours for ${market.name}.`,
  link: `/markets/${market.id}/${market.slug}`,
  linkText: `View ${market.name}`
}));

const searchableChatbotData = [
  ...chatbotData,
  ...productChatbotData,
  ...marketChatbotData
];

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState([]);
  const [hasAsked, setHasAsked] = useState(false);

  function closeChat() {
    setIsOpen(false);
    setQuestion('');
    setAnswers([]);
    setHasAsked(false);
  }

  function sendQuestion(text) {
    const userText = text.trim();
    if (userText === '') return;

    const questionToSearch = normalizeText(userText);
    const matches = [];

    for (const item of searchableChatbotData) {
      let longestKeyword = 0;

      for (const keyword of item.keywords) {
        const normalizedKeyword = normalizeText(keyword);
        if (questionToSearch.includes(normalizedKeyword) && normalizedKeyword.length > longestKeyword) {
          longestKeyword = keyword.length;
        }
      }

      if (longestKeyword > 0) {
        matches.push({ ...item, score: longestKeyword });
      }
    }

    matches.sort((a, b) => b.score - a.score);

    const topAnswers = [];
    for (const item of matches) {
      const linkAlreadyAdded = topAnswers.some((answer) => answer.link === item.link);
      if (!linkAlreadyAdded) {
        topAnswers.push(item);
      }
      if (topAnswers.length === 4) break;
    }

    setAnswers(topAnswers);
    setHasAsked(true);
    setQuestion('');
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendQuestion(question);
  }

  return (
    <div className="chatbot">
      <button
        type="button"
        className="chatbot-toggle"
        onClick={() => isOpen ? closeChat() : setIsOpen(true)}
        aria-label={isOpen ? 'Close chatbot' : 'Open chatbot'}
      >
        {isOpen ? '×' : 'Chat'}
      </button>

      {isOpen && (
        <div className="chatbot-box">
          <h2>FreshFind Assistant</h2>

          <div className="chatbot-messages" aria-live="polite">
            {!hasAsked && (
              <p>Hello! What would you like to know about FreshFind?</p>
            )}

            {hasAsked && answers.length === 0 && (
              <p>I did not understand your question.</p>
            )}

            {hasAsked && answers.length > 0 && (
              <>
                {answers.map((item) => (
                  <div key={item.link} className="chatbot-message bot">
                    <p>{item.answer}</p>
                    <Link to={item.link} onClick={closeChat}>
                      {item.linkText}
                    </Link>
                  </div>
                ))}
              </>
            )}
          </div>

          <div className="chatbot-suggestions">
            <button type="button" onClick={() => sendQuestion('Find a market')}>
              Find a market
            </button>
            <button type="button" onClick={() => sendQuestion('Seasonal produce')}>
              Seasonal produce
            </button>
            <button type="button" onClick={() => sendQuestion('View bookmarks')}>
              Bookmarks
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Ask a question..."
              aria-label="Question for chatbot"
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
