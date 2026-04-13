import React from 'react'

const CircularBadge = () => {
    return (
        <>

            {/* Circular badge with exact positioning and rotated text */}
            <div className="absolute w-[158px] h-[165px]" style={{ left: "calc(50% - 79px - 436px)", top: "531px" }}>
                {/* Border circle */}
                <div className="absolute w-[158px] h-[165px] border border-white rounded-full" />

                {/* Center arrow symbol */}
                <div
                    className="absolute w-[19px] h-[22px] flex items-center justify-center text-lime-400 text-[22px] font-black transform rotate-90"
                    style={{ left: "69px", top: "71px" }}
                >
                    ↓
                </div>

                {/* Rotated text around the circle - "Best Working Since 2025" */}
                <div className="absolute text-white text-[20px] leading-[12px] font-normal">
                    {/* B */}
                    <span
                        className="absolute flex items-center justify-center transform rotate-[30deg]"
                        style={{ left: "65px", top: "21px" }}
                    >
                        B
                    </span>
                    {/* e */}
                    <span
                        className="absolute flex items-center justify-center transform rotate-[45deg]"
                        style={{ left: "78px", top: "32px" }}
                    >
                        e
                    </span>
                    {/* s */}
                    <span
                        className="absolute flex items-center justify-center transform rotate-[60deg]"
                        style={{ left: "88px", top: "46px" }}
                    >
                        s
                    </span>
                    {/* t */}
                    <span
                        className="absolute flex items-center justify-center transform rotate-[75deg]"
                        style={{ left: "94px", top: "64px" }}
                    >
                        t
                    </span>
                    {/* W */}
                    <span
                        className="absolute flex items-center justify-center transform rotate-[105deg]"
                        style={{ left: "98px", top: "92px" }}
                    >
                        W
                    </span>
                    {/* o */}
                    <span
                        className="absolute flex items-center justify-center transform rotate-[120deg]"
                        style={{ left: "88px", top: "110px" }}
                    >
                        o
                    </span>
                    {/* r */}
                    <span
                        className="absolute flex items-center justify-center transform rotate-[135deg]"
                        style={{ left: "77px", top: "125px" }}
                    >
                        r
                    </span>
                    {/* k */}
                    <span
                        className="absolute flex items-center justify-center transform rotate-[150deg]"
                        style={{ left: "64px", top: "134px" }}
                    >
                        k
                    </span>
                    {/* i */}
                    <span
                        className="absolute flex items-center justify-center transform rotate-[165deg]"
                        style={{ left: "50px", top: "142px" }}
                    >
                        i
                    </span>
                    {/* n */}
                    <span
                        className="absolute flex items-center justify-center transform rotate-[180deg]"
                        style={{ left: "35px", top: "145px" }}
                    >
                        n
                    </span>
                    {/* g */}
                    <span
                        className="absolute flex items-center justify-center transform rotate-[-165deg]"
                        style={{ left: "17px", top: "141px" }}
                    >
                        g
                    </span>
                    {/* S */}
                    <span
                        className="absolute flex items-center justify-center transform rotate-[-135deg]"
                        style={{ left: "7px", top: "123px" }}
                    >
                        S
                    </span>
                    {/* i */}
                    <span
                        className="absolute flex items-center justify-center transform rotate-[-120deg]"
                        style={{ left: "2px", top: "113px" }}
                    >
                        i
                    </span>
                    {/* n */}
                    <span
                        className="absolute flex items-center justify-center transform rotate-[-105deg]"
                        style={{ left: "-2px", top: "95px" }}
                    >
                        n
                    </span>
                    {/* c */}
                    <span
                        className="absolute flex items-center justify-center transform rotate-[-90deg]"
                        style={{ left: "-1px", top: "80px" }}
                    >
                        c
                    </span>
                    {/* e */}
                    <span
                        className="absolute flex items-center justify-center transform rotate-[-75deg]"
                        style={{ left: "0px", top: "62px" }}
                    >
                        e
                    </span>
                    {/* 2 */}
                    <span
                        className="absolute flex items-center justify-center transform rotate-[-45deg]"
                        style={{ left: "7px", top: "32px" }}
                    >
                        2
                    </span>
                    {/* 0 */}
                    <span
                        className="absolute flex items-center justify-center transform rotate-[-30deg]"
                        style={{ left: "21px", top: "21px" }}
                    >
                        0
                    </span>
                    {/* 2 */}
                    <span
                        className="absolute flex items-center justify-center transform rotate-[-15deg]"
                        style={{ left: "37px", top: "16px" }}
                    >
                        2
                    </span>
                    {/* 5 */}
                    <span
                        className="absolute flex items-center justify-center transform rotate-[0deg]"
                        style={{ left: "55px", top: "15px" }}
                    >
                        5
                    </span>
                </div>
            </div>
        </>
    )
}

export default CircularBadge