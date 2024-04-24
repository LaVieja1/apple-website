import { Suspense } from "react";
import { Html, PerspectiveCamera, View } from "@react-three/drei";

import Lights from "./Lights";
import IPhone from "./IPhone";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationSize,
  size,
  item,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full ${index === 2} ? 'right-[-100%] : ''`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <Suspense
        fallback={
          <Html>
            <div>Loading</div>
          </Html>
        }
      >
        <IPhone />
      </Suspense>
    </View>
  );
};

export default ModelView;
