import React, { useEffect } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { heroVideo, smallHeroVideo } from "../utils"

export const Hero = () => {
	const [videoSrc, setVideoSrc] = React.useState(
		window.innerWidth > 768 ? heroVideo : smallHeroVideo
	)

	const handleVideoSrcSet = () => {
		if (window.innerWidth > 768) {
			setVideoSrc(heroVideo)
		} else {
			setVideoSrc(smallHeroVideo)
		}
	}

	useEffect(() => {
		window.addEventListener("resize", handleVideoSrcSet)
		return () => {
			window.removeEventListener("resize", handleVideoSrcSet)
		}
	}, [])

	useGSAP(() => {
		gsap.to("#hero", {
			duration: 1,
			opacity: 1,
			delay: 2,
			y: 0,
			ease: "power4.out",
		})

		gsap.to("#cta", {
			duration: 1,
			opacity: 1,
			delay: 2,
			y: -50,
			ease: "power4.out",
		})
	}, [])

	return (
		<section className="w-full nav-height bg-black relative">
			<div className="h-5/6 w-full flex-center flex-col">
				<p id="hero" className="hero-title">
					iPhone 15 Pro
				</p>
				<div className="md:w-10/12 w-9/12">
					<video
						className="pointer-events-none"
						autoPlay
						muted
						playsInline
						key={videoSrc}
					>
						<source src={videoSrc} type="video/mp4" />
						<track
							src={videoSrc}
							kind="captions"
							srcLang="en"
							label="English"
						/>
					</video>
				</div>
			</div>

			<div
				id="cta"
				className="flex flex-col items-center opacity-0 translate-y-20"
			>
				<a href="#highlights" className="btn">
					Buy
				</a>
				<p className="font-normal text-xl">From $199/month or $999</p>
			</div>
		</section>
	)
}
