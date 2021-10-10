const Image = ({ src, alt, className, ...props }: any) =>
  // {
  // src: string;
  // alt: string;
  // className?: string;
  // onClick?: any;
  // props?: any;
  // }
  {
    return <img src={src} alt={alt} className={className} {...props} />;
  };

export default Image;
