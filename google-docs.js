function myFunction() {
  setGrayColor();
  setHeading("## ", DocumentApp.ParagraphHeading.HEADING2)
}


/**
 * "> "から始まる行の文字色を変更する
 *
 * foregroundColor: 変更したい文字色(RGB)
 */
const setGrayColor = () => {
  const startWord = "> ";
  const foregroundColor = "#b7b7b7";
  DocumentApp.getActiveDocument()
    .getBody()                                                 // Body
    .getParagraphs()                                           // Array<Paragraph>
    .map(paragraph => paragraph.editAsText())                  // Array<Text>
    .filter(text => text.getText().startsWith(startWord))      // Array<Text>
    .forEach(text => text.setForegroundColor(foregroundColor)) // 色を上書き
}

/**
 * 特定の文字列から始まる行の文字の大きさをDocumentApp.ParagraphHeading.HEADING〇〇に変換する
 * 
 * startWord: "## "等
 * heading: DocumentApp.ParagraphHeading.HEADING2
 */
const setHeading = (startWord, heading) => {
  DocumentApp.getActiveDocument()
    .getBody()                                                                                 // Body
    .getParagraphs()                                                                           // Array<Paragraph>
    .filter(paragraph => paragraph.editAsText().editAsText().getText().startsWith(startWord))  // Array<Paragraph>
    .forEach(paragraph => paragraph.setHeading(heading))                                       // H1,H2,H3,...に変換
}
