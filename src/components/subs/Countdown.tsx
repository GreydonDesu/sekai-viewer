import FlipCountdown from "@rumess/react-flip-countdown";
import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import "./Countdown.css";

const Countdown: React.FC<React.PropsWithChildren<{ endDate: Date }>> = ({
  children,
  endDate,
}) => {
  const { t } = useTranslation();

  return new Date() > endDate ? (
    <Fragment>{children}</Fragment>
  ) : (
    <FlipCountdown
      endAt={endDate.toISOString()}
      hideYear
      hideMonth
      // titlePosition="bottom"
      dayTitle={t("common:countdown.day")}
      hourTitle={t("common:countdown.hour")}
      minuteTitle={t("common:countdown.minute")}
      secondTitle={t("common:countdown.second")}
    />
  );
};

export default Countdown;
