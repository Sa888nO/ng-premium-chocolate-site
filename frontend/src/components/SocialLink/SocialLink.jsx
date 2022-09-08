const SocialLink = ({ href, svg }) => {
  return (
    <div>
      <a href={href} target="_blank" rel="noreferrer">
        {svg}
      </a>
    </div>
  );
};

export default SocialLink;
