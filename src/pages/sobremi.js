import PageContent from "@/components/about/PageContent";
import LoadingLine from "@/components/loading/LoadingLine";
import React, { useEffect, useState } from "react";

const Sobremi = () => {
  const [renderOn, setRenderOn] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRenderOn(false);
    }, 3000);
  }, []);

  return (
    <>
      {renderOn ? (
        <LoadingLine />
      ) : (
        <>
          <div className="page">
            <PageContent />
          </div>
          <article>
            <div className="squares1"></div>
            <div className="squares2"></div>
          </article>
        </>
      )}
    </>
  );
};

export default Sobremi;
