/**
 * 特定の文字列から始まる行の文字色を変更する
 * 
 * startWord: 特定の文字色
 * foregroundColor: 変更したい文字色(RGB)
 */
function myFunction() {
  const startWord = "> ";
  const foregroundColor = "#b7b7b7";
  DocumentApp.getActiveDocument()
    .getBody()                                                 // Body
    .getParagraphs()                                           // Array<Paragraph>
    .map(paragraph => paragraph.editAsText())                  // Array<Text>
    .filter(text => text.getText().startsWith(startWord))      // Array<Text>
    .forEach(text => text.setForegroundColor(foregroundColor)) // 色を上書き
}
