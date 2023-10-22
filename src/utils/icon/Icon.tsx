import React, { useEffect, useState } from "react"
import Image from "next/image"

const Icon = ({ name, size, ...rest }: any) => {
  const [icon, seticon] = useState<string>("")
  useEffect(() => {
    switch (name) {
      case "microphone":
        return seticon("/images/microphone.png")
    }
  }, [])

  return <Image src={icon} height={size} width={size} {...rest} />
}

export default Icon
