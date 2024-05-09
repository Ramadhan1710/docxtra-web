// components/SummaryResult.tsx
interface SummaryResultProps {
  summary: string;
}

function parseSummaryText(text: string) {
  const lines = text.split('\n');
  let parsedText = '';

  for (const line of lines) {
    // Memeriksa apakah baris merupakan nomor jawaban sub-level
    if (/^\d+\./.test(line)) {
      // Jika ya, tambahkan spasi tab dan beberapa spasi sebelum teks di setiap baris
      const textAfterNumber = line.substring(line.indexOf('.') + 1).trim();
      parsedText += `${line.substring(0, line.indexOf('.'))}. ${' '.repeat(5)}${textAfterNumber}<br>`;
    } else {
      if (line.startsWith('**') && line.endsWith('**')) {
        parsedText += `<b>${line.substring(2, line.length - 2)}</b><br>`;
      } else if (line.startsWith('**')) {
        parsedText += `<b>${line.substring(2)}</b><br>`;
      } else if (line.startsWith('*')) {
        parsedText += `${line.substring(1)}<br>`;
      } else if (line.endsWith('*')) {
        parsedText += `${line.substring(1)}<br>`;
      } else if (line.endsWith('**')) {
        parsedText += `<b>${line.substring(0, line.length - 2)}</b><br>`;
      } else {
        parsedText += `${line}<br>`;
      }
    }
  }

  const filterText = parsedText.toString().replaceAll('**', '');

  return filterText;
}








const SummaryResult: React.FC<SummaryResultProps> = ({ summary }) => {
  return (
    <div>
      <span className="font-lato" dangerouslySetInnerHTML={{ __html: parseSummaryText(summary) }} />
    </div>
  );
};

export default SummaryResult;
