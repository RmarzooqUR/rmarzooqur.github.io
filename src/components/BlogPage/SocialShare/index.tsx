'use client';

import { ShareConf, ShareList, ShareObject } from "@/models/share";
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export type Props = {
  variant: string
  title:string
}

export function SocialShare(props: Props) {
  const [pageUrl, setPageUrl] = useState<Location>();
  const [shareButton, setShareButton] = useState({} as ShareObject);

  useEffect(() => {
    setPageUrl(document.location)
  }, [])
  useEffect(() => {
    setShareButton(socialLinksFactory[props.variant]({title: props.title, pageUrl: pageUrl}))
  }, [pageUrl])

  return <div>
    <Link target="_blank" className="w-4 resize" href={shareButton.url || ''}>
      {shareButton.iconPath && <Image width={25} height={25} alt="Share" src={shareButton.iconPath} />}
    </Link>
  </div>
}

export const socialLinksFactory: ShareList = {
  'HN': (conf: ShareConf) => {
    return {
      url: `https://news.ycombinator.com/submitlink?u=%22+${conf.pageUrl}+%22&t=%22+${conf.title}`,
      title: ``,
      iconPath: '/assets/square-hacker-news-brands-solid-full.svg'
    }
  },
  'TWITTER': (conf: ShareConf) => {
    return {
      url: `https://twitter.com/intent/tweet?text=Check out this blog post:${conf.pageUrl}`,
      title: ``,
      iconPath: `/assets/x-twitter-brands-solid-full.svg`
    }
  },
  'LINKEDIN': ( conf: ShareConf ) => {
    return {
      url: `https://www.linkedin.com/shareArticle?url=${conf.pageUrl}&title=${conf.title}>`,
      title: ``,
      iconPath: `/assets/linkedin-in-brands-solid-full.svg`
    }
  },
  'WHATSAPP': ( conf: ShareConf ) => {
    return {
      url: `https://api.whatsapp.com/send?text=Check out this post: %20<data:${conf.pageUrl}/>`,
      title: ``,
      iconPath: `/assets/whatsapp-brands-solid-full.svg`
    }
  }
}