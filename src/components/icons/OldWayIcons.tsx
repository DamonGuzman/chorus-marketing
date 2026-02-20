import { cn } from "@/lib/utils";
import { useId } from "react";

/** User research icon - person with document and magnifying glass (card 1) - From Figma SVG */
export function SearchPersonIcon({
  className,
  animated = true,
}: {
  className?: string;
  animated?: boolean;
}) {
  const lensClipId = useId().replace(/:/g, "");
  const silhouettePath =
    "M62.6718 19.4783C62.6718 28.8359 55.0878 36.4199 45.7301 36.4199C36.3725 36.4199 28.7885 28.8359 28.7885 19.4783C28.7885 10.1206 36.3725 2.53662 45.7301 2.53662C55.0878 2.53662 62.6718 10.1206 62.6718 19.4783ZM75.3781 63.9502C75.3781 67.4577 72.5324 70.3033 69.025 70.3033H26.9217L25.7437 67.9136C29.6761 64.6537 32.1874 59.7277 32.1874 54.2121C32.1874 49.4463 30.3133 45.1183 27.2619 41.9248C29.3054 41.106 31.5359 40.6555 33.8711 40.6555H36.0814C39.033 42.0055 42.289 42.7732 45.7302 42.7732C49.1715 42.7732 52.4407 42.0055 55.3791 40.6555H57.5893C67.4102 40.6555 75.3781 48.6234 75.3781 58.4442V63.9502Z";
  const panelPath =
    "M89 0C91.2091 0 93 1.79086 93 4V21.0889C93 23.298 91.2091 25.0889 89 25.0889H72.6455C71.5291 25.0889 70.4673 25.5595 69.6719 26.3428C68.1169 27.874 65.6309 30.0774 65.6309 28.5098V4C65.6309 1.79086 67.4217 1.19138e-07 69.6309 0H89ZM70.543 18.6865C70.35 18.6867 70.1936 18.8442 70.1934 19.0371C70.1936 19.2301 70.35 19.3865 70.543 19.3867H78.9668C79.1598 19.3866 79.3162 19.2301 79.3164 19.0371C79.3161 18.8441 79.1598 18.6867 78.9668 18.6865H70.543ZM70.543 12.9844C70.3499 12.9846 70.1935 13.1419 70.1934 13.335C70.1936 13.528 70.35 13.6844 70.543 13.6846H88.0898C88.2829 13.6845 88.4392 13.528 88.4395 13.335C88.4393 13.1418 88.283 12.9845 88.0898 12.9844H70.543ZM70.543 7.28223C70.3499 7.28244 70.1934 7.43968 70.1934 7.63281C70.1937 7.82571 70.35 7.98221 70.543 7.98242H88.0898C88.2829 7.98235 88.4391 7.8258 88.4395 7.63281C88.4394 7.4396 88.2831 7.2823 88.0898 7.28223H70.543Z";
  const lensMotionPath = "M0 0 L10 -7 L24 -17 L44 -33 L20 -14 L0 0";
  const lensKeyTimes = "0;0.28;0.46;0.64;0.82;1";
  const lensKeySplines =
    "0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1";

  return (
    <svg
      className={cn("w-[93px] h-[80px]", className)}
      viewBox="0 0 93 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {animated && (
        <defs>
          <clipPath id={lensClipId}>
            <circle cx="14.4" cy="54.2" r="12">
              <animateMotion
                path={lensMotionPath}
                dur="5.2s"
                repeatCount="indefinite"
                calcMode="spline"
                keyTimes={lensKeyTimes}
                keySplines={lensKeySplines}
                rotate="0"
              />
            </circle>
          </clipPath>
        </defs>
      )}
      <g style={animated ? { transformOrigin: "45px 40px" } : undefined}>
        {animated && (
          <animateTransform
            attributeName="transform"
            type="translate"
            values="translate(0 0); translate(0 -1.2); translate(0 0)"
            dur="5.4s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
            repeatCount="indefinite"
          />
        )}
        {animated ? (
          <>
            <g transform="translate(56 34) scale(0.9) translate(-56 -34)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d={silhouettePath}
                fill="white"
                fillOpacity="0.29"
              />
              <path d={panelPath} fill="white" fillOpacity="0.29">
                <animate
                  attributeName="opacity"
                  values="0.55;0.66;0.8;0.72;0.55"
                  dur="5.2s"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keyTimes="0;0.28;0.46;0.82;1"
                  keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
                />
              </path>
            </g>
            <g clipPath={`url(#${lensClipId})`}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d={silhouettePath}
                fill="white"
                fillOpacity="0.29"
              />
              <path d={panelPath} fill="white" fillOpacity="0.29" />
            </g>
          </>
        ) : (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d={silhouettePath}
              fill="white"
              fillOpacity="0.29"
            />
            <path d={panelPath} fill="white" fillOpacity="0.29" />
          </>
        )}
        <g>
          {animated && (
            <animateMotion
              path={lensMotionPath}
              dur="5.2s"
              calcMode="spline"
              keyTimes={lensKeyTimes}
              keySplines={lensKeySplines}
              repeatCount="indefinite"
              rotate="0"
            />
          )}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.0934 67.7746C17.6224 68.2814 16.0435 68.5567 14.4004 68.5567C6.44728 68.5567 0 62.1094 0 54.1563C0 46.2031 6.44728 39.7559 14.4004 39.7559C22.3535 39.7559 28.8008 46.2031 28.8008 54.1563C28.8008 59.5628 25.8213 64.2735 21.4146 66.7359L26.9359 77.9358C27.2462 78.5652 26.9875 79.327 26.358 79.6373C25.7286 79.9476 24.9668 79.6888 24.6565 79.0594L19.0934 67.7746ZM26.4013 54.1563C26.4013 60.7839 21.0285 66.1567 14.4009 66.1567C7.77335 66.1567 2.40062 60.7839 2.40062 54.1563C2.40062 47.5287 7.77335 42.156 14.4009 42.156C21.0285 42.156 26.4013 47.5287 26.4013 54.1563Z"
            fill="white"
          />
        </g>
      </g>
    </svg>
  );
}

/** Connected nodes network - design system/coordination (card 2) - From Figma SVG */
export function MountainIcon({
  className,
  animated = true,
}: {
  className?: string;
  animated?: boolean;
}) {
  return (
    <svg
      className={cn("w-[100px] h-[80px]", className)}
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="17" cy="63" r="12" fill="white" fillOpacity="0.29">
        {animated && (
          <>
            <animate
              attributeName="cx"
              values="50;17;50"
              dur="3s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0;0.5;1"
              keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
            />
            <animate
              attributeName="cy"
              values="47;63;47"
              dur="3s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0;0.5;1"
              keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
            />
          </>
        )}
      </circle>
      <circle cx="83" cy="63" r="12" fill="white" fillOpacity="0.29">
        {animated && (
          <>
            <animate
              attributeName="cx"
              values="50;83;50"
              dur="3s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0;0.5;1"
              keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
            />
            <animate
              attributeName="cy"
              values="47;63;47"
              dur="3s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0;0.5;1"
              keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
            />
          </>
        )}
      </circle>
      <circle cx="50" cy="17" r="12" fill="white" fillOpacity="0.29">
        {animated && (
          <animate
            attributeName="cy"
            values="47;17;47"
            dur="3s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0;0.5;1"
            keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
          />
        )}
      </circle>
      <path
        d="M64 66H37V62H64V66ZM73.9639 45.7227L70.5 47.7227L62 33L65.4639 31L73.9639 45.7227ZM38.9688 33.0215L29.6777 47.2578L26.3281 45.0713L35.6191 30.835L38.9688 33.0215Z"
        fill="white"
      >
        {animated && (
          <animate
            attributeName="opacity"
            values="0.12;1;0.12"
            dur="3s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0;0.5;1"
            keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
          />
        )}
      </path>
      <circle
        cx="17"
        cy="63"
        r="16.5"
        fill="none"
        stroke="white"
        strokeOpacity="0.29"
      >
        {animated && (
          <>
            <animate
              attributeName="cx"
              values="50;17;50"
              dur="3s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0;0.5;1"
              keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
            />
            <animate
              attributeName="cy"
              values="47;63;47"
              dur="3s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0;0.5;1"
              keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
            />
          </>
        )}
      </circle>
      <circle
        cx="83"
        cy="63"
        r="16.5"
        fill="none"
        stroke="white"
        strokeOpacity="0.29"
      >
        {animated && (
          <>
            <animate
              attributeName="cx"
              values="50;83;50"
              dur="3s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0;0.5;1"
              keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
            />
            <animate
              attributeName="cy"
              values="47;63;47"
              dur="3s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0;0.5;1"
              keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
            />
          </>
        )}
      </circle>
      <circle
        cx="50"
        cy="17"
        r="16.5"
        fill="none"
        stroke="white"
        strokeOpacity="0.29"
      >
        {animated && (
          <animate
            attributeName="cy"
            values="47;17;47"
            dur="3s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0;0.5;1"
            keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
          />
        )}
      </circle>
      <circle cx="26" cy="49" r="4" fill="white" />
      <circle cx="74" cy="49" r="4" fill="white" />
      <circle cx="66" cy="64" r="4" fill="white" />
      <circle cx="34" cy="64" r="4" fill="white" />
      <circle cx="39" cy="29" r="4" fill="white" />
      <circle cx="62" cy="29" r="4" fill="white" />
    </svg>
  );
}

/** Motion/Timeline icon showing cost/time (card 3) - From Figma SVG */
export function CoinsIcon({
  className,
  animated = true,
}: {
  className?: string;
  animated?: boolean;
}) {
  return (
    <svg
      className={cn("w-[86px] h-[63px]", className)}
      viewBox="0 0 86 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="10.1646"
        y="26.5815"
        width="68.8"
        height="18.7636"
        rx="3"
        fill="url(#paint0_linear_coins)"
        fillOpacity="0.5"
      />
      <rect
        width="68.8"
        height="18.7636"
        transform="matrix(-1 0 0 1 76.6182 0)"
        fill="url(#paint1_linear_coins)"
        fillOpacity="0.5"
      />
      <rect
        y="53.1636"
        width="86"
        height="9.38182"
        rx="4.69091"
        fill="url(#paint2_linear_coins)"
        fillOpacity="0.21"
      />
      <line
        x1="24.7358"
        y1="40.1543"
        x2="51.8813"
        y2="40.1543"
        stroke="white"
        strokeLinecap="round"
      />
      <line
        x1="56.0088"
        y1="40.1543"
        x2="63.6088"
        y2="40.1543"
        stroke="white"
        strokeLinecap="round"
      />
      <line
        x1="35.6826"
        y1="30.7725"
        x2="63.6099"
        y2="30.7725"
        stroke="white"
        strokeLinecap="round"
      />
      <line
        x1="0.5"
        y1="-0.5"
        x2="27.6455"
        y2="-0.5"
        transform="matrix(-1 0 0 1 61.7642 14.0728)"
        stroke="#9191A7"
        strokeLinecap="round"
      />
      <line
        x1="0.5"
        y1="-0.5"
        x2="8.1"
        y2="-0.5"
        transform="matrix(-1 0 0 1 30.4912 14.0728)"
        stroke="#9191A7"
        strokeLinecap="round"
      />
      <line
        x1="0.5"
        y1="-0.5"
        x2="28.4273"
        y2="-0.5"
        transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 50.8174 4.69092)"
        stroke="#9191A7"
        strokeLinecap="round"
      />
      <circle cx="9.38182" cy="9.38182" r="9.38182" fill="#B3B3B3">
        {animated && (
          <animate
            attributeName="cx"
            values="9.38;76.62;9.38"
            dur="2.2s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0;0.5;1"
            keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
          />
        )}
      </circle>
      <circle cx="76.6181" cy="35.9634" r="9.38182" fill="#B3B3B3">
        {animated && (
          <animate
            attributeName="cx"
            values="76.62;9.38;76.62"
            dur="2.2s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0;0.5;1"
            keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
          />
        )}
      </circle>
      <defs>
        <linearGradient
          id="paint0_linear_coins"
          x1="24.3293"
          y1="35.9634"
          x2="36.6063"
          y2="15.8405"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" stopOpacity="0.29" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_coins"
          x1="62.9364"
          y1="3.51818"
          x2="57.516"
          y2="20.1405"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9898AE" stopOpacity="0.943428" />
          <stop offset="1" stopColor="#232330" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_coins"
          x1="0"
          y1="57.8545"
          x2="86"
          y2="57.8545"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1E1E1F" />
          <stop offset="1" stopColor="#C4C4C4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** Browser window with cursor - prototyping/training (card 4) - From Figma SVG */
export function CursorIcon({
  className,
  animated = true,
}: {
  className?: string;
  animated?: boolean;
}) {
  return (
    <svg
      className={cn("w-[97px] h-[78px]", className)}
      viewBox="0 0 97 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="15.1836"
        y="2.42041"
        width="79.5253"
        height="61.7168"
        stroke="#979797"
        strokeDasharray="2 4"
      />
      <rect x="12.8159" width="3.87141" height="3.87141" fill="#979797" />
      <rect x="53.3975" width="3.87141" height="3.87141" fill="#979797" />
      <rect
        x="12.8159"
        y="32.1177"
        width="3.87141"
        height="3.87141"
        fill="#979797"
      />
      <rect x="93.1294" width="3.87141" height="3.87141" fill="#979797" />
      <rect
        x="93.1294"
        y="32.1177"
        width="3.87141"
        height="3.87141"
        fill="#979797"
      />
      <rect
        x="93.1294"
        y="62.4106"
        width="3.87141"
        height="3.87141"
        fill="#979797"
      />
      <rect
        x="53.3975"
        y="62.4106"
        width="3.87141"
        height="3.87141"
        fill="#979797"
      />
      <rect
        x="15.1387"
        y="56.9912"
        width="3.87141"
        height="3.87141"
        fill="#979797"
      />
      <path
        d="M92.8843 60.0889C92.8841 61.7455 91.5409 63.0887 89.8843 63.0889H47.1733L17.0044 38.3027V15.7021H92.8843V60.0889ZM89.8843 4.24316C91.541 4.2433 92.8843 5.58639 92.8843 7.24316V14.7021H17.0044V7.24316C17.0044 5.58631 18.3475 4.24316 20.0044 4.24316H89.8843ZM22.269 7.88086C21.2216 7.88097 20.3719 8.73652 20.3716 9.79102C20.3716 10.8458 21.2215 11.7011 22.269 11.7012C23.3165 11.7009 24.1655 10.8457 24.1655 9.79102C24.1652 8.73661 23.3163 7.88111 22.269 7.88086ZM29.854 7.88086C28.8066 7.88103 27.9577 8.7365 27.9575 9.79102C27.9577 10.8456 28.8066 11.7 29.854 11.7002C30.9016 11.7002 31.7513 10.8457 31.7515 9.79102C31.7512 8.7364 30.9015 7.88086 29.854 7.88086ZM37.4429 7.88086C36.3954 7.88097 35.5456 8.73646 35.5454 9.79102C35.5455 10.8456 36.3954 11.7001 37.4429 11.7002C38.4904 11.7001 39.3392 10.8456 39.3394 9.79102C39.3391 8.73646 38.4903 7.88096 37.4429 7.88086Z"
        fill="white"
        fillOpacity="0.19"
      />
      <path
        d="M17.0044 38.3027L47.1733 63.0889H17.0044V38.3027Z"
        fill="white"
        fillOpacity="0.19"
      />
      {animated ? (
        <g transform="translate(-13.7435 -40.6724)">
          <animateMotion
            dur="6s"
            repeatCount="indefinite"
            calcMode="paced"
            path="M15.18 2.42 H65.5096 V27.9883 H15.18 V2.42"
          />
          <path
            d="M14.3226 40.6724L42.9439 64.5175L24.7113 64.5175L13.7435 76.8241L14.3226 40.6724Z"
            fill="white"
          />
        </g>
      ) : (
        <path
          d="M14.3226 40.6724L42.9439 64.5175L24.7113 64.5175L13.7435 76.8241L14.3226 40.6724Z"
          fill="white"
        />
      )}
    </svg>
  );
}
