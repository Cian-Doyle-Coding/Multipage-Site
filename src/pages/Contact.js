import {useLocation} from "react-router-dom"

export default function Contact() {
  const queryString = useLocation().search
  console.log(queryString)

  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get("name")

  return (
    <div>
      <h2>hey {name}, Contact us here...</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, enim! Deleniti aspernatur eligendi, odio voluptatem dolorem aliquid voluptas voluptatum tempora.</p>
    </div>
  )
}
