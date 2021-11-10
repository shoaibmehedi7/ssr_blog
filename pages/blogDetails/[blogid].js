import { collection, getDocs, getFirestore, query } from "@firebase/firestore";
import { useRouter } from "next/dist/client/router";

function getBlogIdDetails(props) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <h1><strong>{props.blogDetails.name} </strong> </h1>
      <br />
      <p>{props.blogDetails.description}</p>
    </div>
  )
}
export async function getStaticPaths() {
  return {
    // paths: [{  params: { blogid: '1' } },{  params: { blogid: '2' } },],
    paths: [{ params: { blogid: '1' } }, { params: { blogid: '2' } },],
    fallback: false
  }
}
export async function getStaticProps(context) {
  const { params } = context
  const blogId = params.blogid
  let res
  let data = []
  const db = getFirestore();
  try {
    const q = query(collection(db, "categories"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    res = JSON.stringify(data[0])
  } catch (e) {
  }
  return {
    props: {
      blogDetails: JSON.parse(res)
    },
  };
}

export default getBlogIdDetails