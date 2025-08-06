import { BeatLoader } from "react-spinners";

export default function Spinner({loading}) {
  return (
    <div><BeatLoader color="#3b82f6" size={20} cssOverride={{margin: "48px", textAlign: "center"}} loading={loading} /></div>
  )
}
