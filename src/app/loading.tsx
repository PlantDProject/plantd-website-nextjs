import Image from "next/image";

const Loading = () => {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div id="globalLoader">
            <Image className="loadingAnimation" src="/next-images/favicon.png" alt="" width={50} height={50}/>
        </div>
    );
};

export default Loading;
