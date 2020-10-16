import React from 'react'
import { SvgIcon, SvgIconProps } from '@material-ui/core'

export function WalletConnectIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <svg viewBox="0 0 512 512">
                <radialGradient id="a" cx="0%" cy="50%" r="100%">
                    <stop offset="0" stopColor="#5d9df6" />
                    <stop offset="1" stopColor="#006fff" />
                </radialGradient>
                <g fill="none" fillRule="evenodd">
                    <path
                        d="m256 0c141.384896 0 256 114.615104 256 256s-114.615104 256-256 256-256-114.615104-256-256 114.615104-256 256-256z"
                        fill="url(#a)"
                    />
                    <path
                        d="m64.6917558 37.7088298c51.5328072-50.2784397 135.0839942-50.2784397 186.6167992 0l6.202057 6.0510906c2.57664 2.5139218 2.57664 6.5897948 0 9.1037177l-21.215998 20.6995759c-1.288321 1.2569619-3.3771 1.2569619-4.665421 0l-8.534766-8.3270205c-35.950573-35.0754962-94.237969-35.0754962-130.188544 0l-9.1400282 8.9175519c-1.2883217 1.2569609-3.3771016 1.2569609-4.6654208 0l-21.2159973-20.6995759c-2.5766403-2.5139229-2.5766403-6.5897958 0-9.1037177zm230.4934852 42.8089117 18.882279 18.4227262c2.576627 2.5139103 2.576642 6.5897593.000032 9.1036863l-85.141498 83.070358c-2.576623 2.513941-6.754182 2.513969-9.33084.000066-.00001-.00001-.000023-.000023-.000033-.000034l-60.428256-58.957451c-.64416-.628481-1.68855-.628481-2.33271 0-.000004.000004-.000008.000007-.000012.000011l-60.4269683 58.957408c-2.5766141 2.513947-6.7541746 2.51399-9.3308408.000092-.0000151-.000014-.0000309-.000029-.0000467-.000046l-85.14386774-83.071463c-2.57663928-2.513921-2.57663928-6.589795 0-9.1037163l18.88231264-18.4226955c2.5766393-2.5139222 6.7541993-2.5139222 9.3308397 0l60.4291347 58.9582758c.6441608.62848 1.6885495.62848 2.3327103 0 .0000095-.000009.0000182-.000018.0000277-.000025l60.4261065-58.9582508c2.576581-2.51398 6.754142-2.5140743 9.33084-.0002103.000037.0000354.000072.0000709.000107.0001063l60.429056 58.9583548c.644159.628479 1.688549.628479 2.332709 0l60.428079-58.9571925c2.57664-2.5139231 6.754199-2.5139231 9.330839 0z"
                        fill="#fff"
                        fillRule="nonzero"
                        transform="translate(98 160)"
                    />
                </g>
            </svg>
        </SvgIcon>
    )
}
