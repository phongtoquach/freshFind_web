$word = New-Object -ComObject Word.Application
$word.Visible = $false
$word.DisplayAlerts = 0
try {
    $source = 'C:\CuaDieu\TechWiz\docs\ReadMe_source.htm'
    Write-Host "Opening $source..."
    $doc = $word.Documents.Open($source)
    Write-Host "Document opened! InlineShapes: $($doc.InlineShapes.Count) Shapes: $($doc.Shapes.Count)"

    # Embed linked images into document so docx contains all images
    Write-Host "Embedding images into document..."
    foreach ($shape in $doc.InlineShapes) {
        try {
            if ($shape.LinkFormat) {
                $shape.LinkFormat.SavePictureWithDocument = $true
                $shape.LinkFormat.BreakLink()
            }
        } catch {}
    }

    $docxPath = 'C:\CuaDieu\TechWiz\docs\ReadMe.docx'
    $docBinary = 'C:\CuaDieu\TechWiz\docs\ReadMe.doc'
    if (Test-Path $docxPath) { Remove-Item $docxPath -Force }
    if (Test-Path $docBinary) { Remove-Item $docBinary -Force }

    Write-Host "Saving to $docxPath..."
    $doc.SaveAs2($docxPath, 16)
    Write-Host "Saved to $docxPath (Size: $((Get-Item $docxPath).Length) bytes)"

    try {
        $doc.CheckCompatibility = $false
        Write-Host "Saving to $docBinary..."
        $doc.SaveAs2($docBinary, 0)
        Write-Host "Saved to $docBinary (Size: $((Get-Item $docBinary).Length) bytes)"
        Copy-Item $docBinary 'C:\CuaDieu\TechWiz\ReadMe.doc' -Force
        Write-Host "Copied to root ReadMe.doc!"
    } catch {
        Write-Host "Note: .doc binary export skipped: $($_.Exception.Message)"
    }
} catch {
    Write-Host "Error: $($_.Exception.Message)"
} finally {
    $doc = $null
    $word.Quit()
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($word) | Out-Null
    [System.GC]::Collect()
    [System.GC]::WaitForPendingFinalizers()
}
