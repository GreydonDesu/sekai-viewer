import { Skeleton } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { useSvgStyles } from "../../styles/svg";
import { IResourceBoxInfo, IHonorInfo } from "../../types";
import { getRemoteAssetURL, useCachedData } from "../../utils";
import { degreeFrameMap } from "../../utils/resources";

const DegreeImage: React.FC<
  { resourceBoxId: number } & React.HTMLProps<HTMLDivElement>
> = ({ resourceBoxId, style }) => {
  const classes = useSvgStyles();

  const [resourceBoxes] = useCachedData<IResourceBoxInfo>("resourceBoxes");
  const [honors] = useCachedData<IHonorInfo>("honors");

  const [honor, setHonor] = useState<IHonorInfo>();
  const [degreeImage, setDegreeImage] = useState<string>("");
  const [degreeRankImage, setDegreeRankImage] = useState<string>("");

  useEffect(() => {
    if (resourceBoxes.length && honors.length) {
      setHonor(
        honors.find(
          (honor) =>
            honor.id ===
            resourceBoxes
              .find(
                (resBox) =>
                  resBox.resourceBoxPurpose === "event_ranking_reward" &&
                  resBox.id === resourceBoxId
              )!
              .details.find((detail) => detail.resourceType === "honor")!
              .resourceId
        )!
      );
    }
  }, [honors, resourceBoxes, resourceBoxId]);

  useEffect(() => {
    if (honor) {
      getRemoteAssetURL(
        `honor/${honor.assetbundleName}_rip/degree_main.webp`,
        setDegreeImage
      );
      getRemoteAssetURL(
        `honor/${honor.assetbundleName}_rip/rank_main.webp`,
        setDegreeRankImage
      );
    }
  }, [honor]);

  return honor ? (
    <div className={classes.svg} style={style}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 80">
        <image href={degreeImage} x="0" y="0" height="80" width="380" />
        {/* frame */}
        <image
          href={degreeFrameMap[honor.honorRarity]}
          x="0"
          y="0"
          height="80"
          width="380"
        />
        {/* rank */}
        <image href={degreeRankImage} x="190" y="0" width="150" height="78" />
      </svg>
    </div>
  ) : (
    <Skeleton variant="rect" className={classes.skeleton}></Skeleton>
  );
};

export default DegreeImage;