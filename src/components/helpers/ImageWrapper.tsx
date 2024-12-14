import React, { useEffect, useState, useMemo } from "react";
import Image, { ImageProps } from "mui-image";
import { getRemoteAssetURL } from "../../utils";
import { ServerRegion } from "../../types.d";

const ImageWrapper: React.FC<
  ImageProps & { directSrc?: boolean; region?: ServerRegion }
> = ({ src, directSrc = false, region = "jp", duration = 1000, ...props }) => {
  const [isReady, setIsReady] = useState(false);
  const [realSrc, setRealSrc] = useState(src);

  useEffect(() => {
    if (!directSrc) {
      getRemoteAssetURL(
        src,
        (value: string) => {
          setRealSrc(value);
          setIsReady(true);
        },
        "minio",
        region
      );
    } else {
      setIsReady(true);
    }
  }, [directSrc, region, src]);

  const imageProps = useMemo(
    () => Object.assign({}, props, { src: realSrc }),
    [props, realSrc]
  );

  return isReady ? <Image duration={duration} {...imageProps} /> : null;
};

export default ImageWrapper;
