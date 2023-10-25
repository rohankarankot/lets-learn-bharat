import Image from "next/image"
import { useEffect, useState } from "react"

const Icon = ({ name, size, ...rest }: any) => {
  const [icon, seticon] = useState<string>("")
  useEffect(() => {
    switch (name) {
      case "microphone":
        return seticon("/images/microphone.png")
    }
  }, [])

  return <Image src={icon} height={size} width={size} {...rest} alt="no icon avaliable" />
}

export default Icon
