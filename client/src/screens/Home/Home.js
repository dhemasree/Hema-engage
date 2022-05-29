import React, { useEffect, useState } from "react";
import Landing from "./components/Landing/Landing";
import RowItemSlider from "./components/RowItemSlider/RowItemSlider";
import { useSelector } from "react-redux";
import { SkeletonTheme } from "react-loading-skeleton";
import { getImageData } from "../../Api/Api";
import "./Home.css";

export default function Home() {

  const [contentData, setContentData] = useState([]);
  const [userCollab, setUserCollab] = useState([]);
  const [itemCollab, setItemCollab] = useState([]);

  const getRecommendationData = async (api, setData) => {
    const recRes = await fetch(api);
    const recData = await recRes.json();
    setData(recData);
  };

  const userId = useSelector((state) => {
    return state.userInfo.userId;
  });
  useEffect(() => {
   
    getRecommendationData(
      `http://localhost:8000/recommendation/${String(userId)}/rec-con`,
      setContentData
    );
    getRecommendationData(
      `http://localhost:8000/recommendation/${String(userId)}/rec-coli`,
      setItemCollab
    );
    getRecommendationData(
      `http://localhost:8000/recommendation/${String(userId)}/rec-colu`,
      setUserCollab
    );
  }, [userId]);

  return (
    <div className="home__container">
      <div className="home__landing">
        <Landing />
      </div>
      <div className="home__main">
        <div className="home__main-overlay"></div>
        <div className="home__catalogues">
          <SkeletonTheme
            color="#1a1919"
            baseColor="#1a1919"
            highlightColor="#222121"
          >
           

           

            {contentData.length > 0 && (
              <RowItemSlider
                header="Movies similar to Pirates of the Caribbean"
                data={contentData}
              />
            )}
            {userCollab.length > 0 && (
              <RowItemSlider header="User Based Collabrative Filltering" data={userCollab} />
            )}
            {itemCollab.length > 0 && (
              <RowItemSlider header="Item Based Collabrative Filltering" data={itemCollab} />
            )}

            {/* {regressionData ? (
              <RowItemSlider header="Regression Based" data={regressionData} />
            ) : (
              [...Array(5)].map(() => (
                <Skeleton
                  key={uuidv4()}
                  duration={0.7}
                  width={250}
                  height={300}
                  style={{ marginRight: "15px" }}
                />
              ))
            )}
            {contentData ? (
              <RowItemSlider
                header="Content based on Pirates of carebian"
                data={contentData}
              />
            ) : (
              [...Array(5)].map(() => (
                <Skeleton
                  key={uuidv4()}
                  duration={0.7}
                  width={250}
                  height={300}
                  style={{ marginRight: "15px" }}
                />
              ))
            )}

            {userCollab ? (
              <RowItemSlider header="User Collabrative" data={userCollab} />
            ) : (
              [...Array(5)].map(() => (
                <Skeleton
                  key={uuidv4()}
                  duration={0.7}
                  width={250}
                  height={300}
                  style={{ marginRight: "15px" }}
                />
              ))
            )}
            {itemCollab ? (
              <RowItemSlider header="Item Collabrative" data={itemCollab} />
            ) : (
              [...Array(5)].map(() => (
                <Skeleton
                  key={uuidv4()}
                  duration={0.7}
                  width={250}
                  height={300}
                  style={{ marginRight: "15px" }}
                />
              ))
            )} */}
          </SkeletonTheme>
        </div>
      </div>
    </div>
  );
}
