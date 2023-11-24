import DOMPurify from "dompurify";
import * as S from "./styles";

interface HtmlProps {
  html: string;
}

function TextHtml({ html }: HtmlProps) {
  const htmlPurify = { __html: DOMPurify.sanitize(html) };
  return <S.Container dangerouslySetInnerHTML={htmlPurify} />;
}

export default TextHtml;
