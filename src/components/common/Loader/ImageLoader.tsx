import React, { useState } from 'react';

interface IProps {
  loadedClassName?: string;
  loadingClassName?: string;
  [prop: string]: any;
}

const ImageLoader: React.FC<IProps> = (props) => {
  const _loaded: Record<string, boolean> = {};
  console.log('_loaded[props.src]', _loaded)
  const [loaded, setLoaded] = useState<boolean>(!!_loaded[props.src]);
console.log('loaded', loaded)
  const onLoad = () => {
    _loaded[props.src] = true;
    setLoaded(true);
  };

  return (
    <img
      className={`${props.className} ${loaded ? props.loadedClassName : props.loadingClassName}`}
      data-key={props.imgId}
      onLoad={onLoad}
      src={props.src}
    />
  );
};

ImageLoader.defaultProps = {
  className: '',
  loadingClassName: 'img-loading',
  loadedClassName: 'img-loaded'
};

export default ImageLoader;
