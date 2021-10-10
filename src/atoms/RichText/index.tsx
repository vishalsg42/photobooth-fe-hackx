const RichText = ({ html, className, children, getRef }) => {
  return (
    <div style={{ position: "relative" }} className={className} ref={getRef}>
      <span dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default RichText;
