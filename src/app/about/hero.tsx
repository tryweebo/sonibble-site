import { StrokeLineBackground } from '~/components/common/bg'

export default function Hero(): Readonly<React.ReactElement> {
  return (
    <section className="relative">
      <div className="absolute">
        <StrokeLineBackground />
      </div>

      <div className="absolute right-28 top-56 hidden laptop:block">
        <svg
          width="204"
          height="206"
          viewBox="0 0 204 206"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="100.406"
            cy="101.431"
            r="87"
            fill="white"
            stroke="#F5F5F5"
            strokeWidth="2"
          />
          <circle
            cx="100.406"
            cy="101.431"
            r="52"
            fill="white"
            stroke="#F5F5F5"
            strokeWidth="2"
          />
          <path
            d="M106.495 92.4284L93.0695 109.007"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="square"
          />
          <path
            d="M107.611 103.042C104.596 100.601 103.896 95.6377 106.495 92.4281"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="square"
          />
          <path
            d="M95.8809 93.5437C98.8959 95.9852 103.896 95.6377 106.495 92.4281"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="square"
          />
          <path
            d="M64.6884 50.6452L58.0173 39.4178L62.3032 36.8712C64.4928 35.5702 66.4926 35.8947 67.5906 37.7426C68.3565 39.0315 68.3142 40.2333 67.4729 41.3635C68.9551 41.0291 70.1269 41.5515 70.9205 42.887C72.0277 44.7504 71.3503 46.6868 69.1297 48.0063L64.6884 50.6452ZM63.0128 38.2775L60.3418 39.8646L62.4825 43.4673L65.2466 41.8249C66.5045 41.0775 66.8128 39.9698 66.1208 38.8051C65.4564 37.687 64.3327 37.4932 63.0128 38.2775ZM66.1552 43.071L63.2668 44.7872L65.4075 48.3899L68.2959 46.6737C69.6003 45.8986 69.9334 44.7972 69.2413 43.6326C68.577 42.5145 67.4441 42.3052 66.1552 43.071Z"
            fill="black"
          />
          <path
            d="M86.3365 41.1513L78.6974 43.4095L74.9952 30.8854L82.6344 28.6273L83.0952 30.1863L77.1537 31.9426L78.3109 35.8575L83.6635 34.2752L84.109 35.7823L78.7564 37.3645L79.929 41.3313L85.8706 39.575L86.3365 41.1513Z"
            fill="black"
          />
          <path
            d="M91.9925 30.5263C91.8899 28.2888 93.6249 26.6904 96.3135 26.5671C98.8036 26.453 100.473 27.7688 100.721 30.0177L98.9346 30.0996C98.7848 28.8046 97.8298 28.0889 96.3682 28.1559C94.7262 28.2312 93.6996 29.11 93.7583 30.3912C93.8063 31.4377 94.4307 32.042 95.671 32.2744L97.8414 32.6813C99.993 33.0708 101.129 34.1761 101.213 36.0166C101.32 38.3624 99.5667 39.9436 96.7878 40.071C94.1353 40.1926 92.3033 38.8842 92.0924 36.6517L93.8969 36.569C93.99 37.8124 95.073 38.5583 96.715 38.4831C98.4473 38.4037 99.5108 37.5412 99.4512 36.242C99.4041 35.2135 98.8149 34.5895 97.5566 34.3579L95.387 33.9691C93.2354 33.5795 92.0785 32.403 91.9925 30.5263Z"
            fill="black"
          />
          <path
            d="M109.051 28.7325L109.368 27.1379L118.811 29.011L118.495 30.6056L114.65 29.843L112.426 41.0586L110.689 40.7142L112.914 29.4986L109.051 28.7325Z"
            fill="black"
          />
          <path
            d="M133.356 49.3719L138.266 36.6623L139.724 37.7886L136.731 45.5647C136.454 46.2183 136.177 46.872 135.713 47.7686C136.525 47.072 137.069 46.6931 137.646 46.2714L144.485 41.4656L146 42.6361L143.064 50.4563C142.805 51.1464 142.528 51.8 142.089 52.6934C142.934 51.9539 143.485 51.5354 143.982 51.1884L150.775 46.3241L152.204 47.4284L141.104 55.3567L139.761 54.3187L143.575 44.2094L134.729 50.4319L133.356 49.3719Z"
            fill="black"
          />
          <path
            d="M152.818 69.5566L148.271 63.0161L158.994 55.561L163.541 62.1015L162.207 63.0296L158.67 57.9425L155.318 60.2728L158.504 64.8557L157.214 65.7527L154.028 61.1699L150.631 63.5312L154.168 68.6183L152.818 69.5566Z"
            fill="black"
          />
          <path
            d="M156.071 75.6798L168.3 71.0936L170.05 75.7616C170.945 78.1463 170.272 80.0576 168.26 80.8124C166.856 81.3389 165.681 81.0852 164.716 80.0578C164.784 81.5758 164.063 82.6371 162.609 83.1826C160.579 83.9438 158.793 82.9354 157.886 80.5169L156.071 75.6798ZM168.541 76.212L167.45 73.303L163.526 74.7746L164.655 77.7851C165.169 79.155 166.205 79.6539 167.473 79.1782C168.691 78.7215 169.08 77.6496 168.541 76.212ZM163.268 78.4596L162.088 75.3138L158.165 76.7854L159.344 79.9312C159.877 81.3519 160.903 81.874 162.171 81.3983C163.389 80.9416 163.795 79.8633 163.268 78.4596Z"
            fill="black"
          />
          <path
            d="M161.447 104.616L161.739 100.309L174.769 101.19L174.482 105.426C174.219 109.318 171.409 111.772 167.517 111.508C163.642 111.246 161.186 108.473 161.447 104.616ZM172.869 105.19L173.027 102.847L163.259 102.186L163.096 104.601C162.899 107.502 164.649 109.468 167.641 109.67C170.669 109.875 172.667 108.163 172.869 105.19Z"
            fill="black"
          />
          <path
            d="M156.871 125.233L159.456 117.698L171.809 121.936L169.224 129.471L167.686 128.943L169.697 123.083L165.835 121.758L164.024 127.038L162.538 126.528L164.349 121.248L160.436 119.906L158.426 125.767L156.871 125.233Z"
            fill="black"
          />
          <path
            d="M162.255 135.999C164.138 137.211 164.436 139.551 162.979 141.814C161.629 143.91 159.589 144.509 157.613 143.408L158.581 141.904C159.723 142.532 160.86 142.169 161.652 140.939C162.542 139.557 162.42 138.211 161.342 137.516C160.461 136.949 159.607 137.108 158.699 137.984L157.11 139.518C155.546 141.046 153.987 141.331 152.438 140.334C150.464 139.062 150.191 136.717 151.697 134.378C153.134 132.145 155.262 131.41 157.204 132.532L156.226 134.05C155.159 133.406 153.923 133.856 153.033 135.238C152.095 136.696 152.181 138.063 153.275 138.767C154.141 139.324 154.99 139.206 155.908 138.314L157.482 136.771C159.046 135.243 160.675 134.982 162.255 135.999Z"
            fill="black"
          />
          <path
            d="M153.06 153.851L143.694 144.75L144.928 143.48L154.294 152.582L153.06 153.851Z"
            fill="black"
          />
          <path
            d="M139.66 162.897C142.029 161.371 142.331 158.705 140.658 156.109C138.946 153.451 136.409 152.916 134.147 154.373C132.279 155.577 131.392 157.502 132.82 159.719L133.026 160.038L136.7 157.67L137.552 158.991L132.48 162.259L128.576 156.2L129.822 155.398L130.887 156.817C130.863 155.479 131.749 153.92 133.358 152.883C136.471 150.877 140.06 151.745 142.242 155.132C144.394 158.472 143.764 162.23 140.53 164.314C138.13 165.86 135.372 165.681 133.648 163.805L135.227 162.788C136.537 163.921 138.202 163.837 139.66 162.897Z"
            fill="black"
          />
          <path
            d="M120.342 159.629L122.043 159.138L125.665 171.685L123.964 172.176L114.743 164.328L117.543 174.03L115.842 174.52L112.22 161.973L113.921 161.482L123.142 169.33L120.342 159.629Z"
            fill="black"
          />
          <path
            d="M89.5892 166.868L92.86 167.347L93.5351 162.736L95.2867 162.992L93.3946 175.914L88.3723 175.179C85.8344 174.807 84.4514 172.907 84.8151 170.423C85.1684 168.01 87.0692 166.499 89.5892 166.868ZM88.9065 173.651L91.8734 174.085L92.6297 168.92L89.7343 168.496C88.0006 168.242 86.8863 169.119 86.6534 170.71C86.4153 172.337 87.2622 173.41 88.9065 173.651Z"
            fill="black"
          />
          <path
            d="M79.3525 159.639L81.0435 160.37L71.4812 170.463L69.6742 169.681L70.4665 155.794L72.1741 156.533L71.9607 159.984L77.0005 162.164L79.3525 159.639ZM71.9038 167.576L75.8935 163.358L71.8318 161.601L71.5059 167.403C71.4884 167.671 71.4494 167.989 71.4036 168.186C71.5085 168.034 71.7133 167.788 71.9038 167.576Z"
            fill="black"
          />
          <path
            d="M63.6033 151.274L64.9816 152.385L56.7865 162.554L52.9469 159.459C50.767 157.702 50.4025 155.506 51.9327 153.607C53.0662 152.201 54.5855 151.755 56.18 152.367L57.5698 146.412L59.1028 147.647L57.7596 153.2L60.3615 155.297L63.6033 151.274ZM56.4056 160.205L59.3754 156.52L56.9001 154.525C55.6202 153.494 54.3335 153.594 53.3927 154.761C52.4405 155.942 52.6786 157.201 53.9444 158.221L56.4056 160.205Z"
            fill="black"
          />
          <path
            d="M44.2357 148.976L42.9285 149.942L37.2049 142.201L38.5122 141.234L40.8424 144.386L50.0366 137.589L51.089 139.012L41.8947 145.81L44.2357 148.976Z"
            fill="black"
          />
          <path
            d="M43.8136 127.133L44.4598 128.781L32.3013 133.549L31.6551 131.901L38.6158 121.993L29.2152 125.679L28.569 124.031L40.7275 119.263L41.3737 120.911L34.413 130.82L43.8136 127.133Z"
            fill="black"
          />
          <path
            d="M38.2168 104.166L39.0974 112.083L26.1176 113.526L25.237 105.609L26.8528 105.43L27.5377 111.587L31.595 111.136L30.978 105.589L32.5399 105.415L33.1568 110.962L37.268 110.505L36.5831 104.347L38.2168 104.166Z"
            fill="black"
          />
          <path
            d="M38.4969 95.4898L38.241 97.2414L25.3184 95.3536L26.0312 90.4741C26.4359 87.7037 28.1417 86.2735 30.5547 86.6259C32.342 86.887 33.4984 87.9687 33.7817 89.6531L39.617 87.822L39.3324 89.7702L33.8681 91.4364L33.385 94.743L38.4969 95.4898ZM27.1471 93.8318L31.83 94.5159L32.2895 91.3701C32.5271 89.7436 31.7871 88.6863 30.3036 88.4695C28.8022 88.2502 27.839 89.0953 27.604 90.7039L27.1471 93.8318Z"
            fill="black"
          />
        </svg>
      </div>

      <div className="px-5 laptop:px-0 container mx-auto py-28 laptop:py-48 relative">
        <div className="flex flex-col">
          <h2 className="text-5xl laptop:text-7xl !leading-tight font-medium font-heading desktop:w-8/12">
            Meet Weebo, partner that focus on building website with purpose
          </h2>
          <p className="text-lg font-medium leading-relaxed desktop:w-5/12 mt-14">
            We build sites that make a difference and help you stand out from
            your competition. Learn about our approach, team, and capabilities
            that make us one of the leading partner.
          </p>
        </div>
      </div>
    </section>
  )
}
