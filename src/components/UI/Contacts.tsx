import { PhoneOutlined } from '@ant-design/icons';
import styles from './contacts.module.css';
import { Link } from 'react-router-dom';

const Contacts = () => {
  return (
    <div className={styles.card}>
      <PhoneOutlined />
      <a className={styles.social_link} href="https://www.whatsapp.com/" target="blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="256px"
          height="258px"
          viewBox="0 0 256 258"
          version="1.1"
          preserveAspectRatio="xMidYMid">
          <title>WhatsApp</title>
          <defs>
            <linearGradient
              x1="49.9999726%"
              y1="100.000225%"
              x2="49.9999726%"
              y2="4.85578831e-05%"
              id="whatsappLinearGradient-1">
              <stop stopColor="#1FAF38" offset="0%" />
              <stop stopColor="#60D669" offset="100%" />
            </linearGradient>
            <linearGradient
              x1="50.0000414%"
              y1="100.000108%"
              x2="50.0000414%"
              y2="-0.000129944756%"
              id="whatsappLinearGradient-2">
              <stop stopColor="#F9F9F9" offset="0%" />
              <stop stopColor="#FFFFFF" offset="100%" />
            </linearGradient>
          </defs>
          <g>
            <path
              d="M5.46329987,127.456258 C5.45681909,149.133181 11.1210232,170.299417 21.890788,188.954998 L21.890788,188.954998 L4.43285541,252.697385 L69.6645263,235.593304 C87.6357369,245.388359 107.871333,250.558727 128.464668,250.563912 L128.464668,250.563912 L128.519107,250.563912 C196.334018,250.563912 251.537325,195.380046 251.565851,127.55347 L251.565851,127.55347 C251.578802,94.6855323 238.790922,63.7799755 215.557316,40.5282231 L215.557316,40.5282231 C192.327598,17.2777669 161.43241,4.46655548 128.513922,4.45229776 L128.513922,4.45229776 C60.6912344,4.45229776 5.49181531,59.6322745 5.46329987,127.456258"
              fill="url(#whatsappLinearGradient-1)"
            />
            <path
              d="M1.07062531,127.416078 C1.06284837,149.873286 6.93054909,171.796478 18.0839762,191.11958 L18.0839762,191.11958 L0,257.147091 L67.5712334,239.429927 C86.1892261,249.581425 107.15067,254.933255 128.481518,254.941032 L128.481518,254.941032 L128.535957,254.941032 C198.783754,254.941032 255.970181,197.772751 256,127.518474 L256,127.518474 C256.011658,93.4697375 242.763642,61.4533745 218.700495,37.3681934 L218.700495,37.3681934 C194.63346,13.2856047 162.632651,0.0142577221 128.535957,0 L128.535957,0 C58.2751986,0 1.09914076,57.1592078 1.07062531,127.416078 L1.07062531,127.416078 Z M41.3098055,187.792346 L38.7874848,183.787222 C28.1810358,166.922929 22.5829356,147.435216 22.5907045,127.423855 L22.5907045,127.423855 C22.6140434,69.0294095 70.1376234,21.5213834 128.576138,21.5213834 L128.576138,21.5213834 C156.875124,21.5330488 183.472256,32.5646372 203.47584,52.5811829 L203.47584,52.5811829 C223.479424,72.5990247 234.486386,99.2091187 234.478613,127.510697 L234.478613,127.510697 C234.452686,185.906438 186.92781,233.420945 128.535957,233.420945 L128.535957,233.420945 L128.49448,233.420945 C109.481159,233.410576 90.8346512,228.305015 74.571775,218.656426 L74.571775,218.656426 L70.7014515,216.360933 L30.6035524,226.874058 L41.3098055,187.792346 Z"
              fill="url(#whatsappLinearGradient-2)"
            />
            <path
              d="M96.6782434,74.1484502 C94.2920192,68.8445776 91.781364,68.7382928 89.5117939,68.6449695 C87.6544015,68.565904 85.5300009,68.5710189 83.4081926,68.5710189 C81.2837921,68.5710189 77.8334233,69.369521 74.9157749,72.5554738 C71.9955342,75.7427228 63.7675324,83.4470773 63.7675324,99.1163139 C63.7675324,114.786847 75.181487,129.928547 76.7718711,132.05554 C78.3648475,134.178645 98.8052363,167.362845 131.176746,180.128691 C158.081068,190.737732 163.556033,188.627589 169.395218,188.096165 C175.234404,187.566037 188.238742,180.394403 190.891975,172.957057 C193.546503,165.521006 193.546503,159.146509 192.750663,157.815356 C191.954823,156.488091 189.830423,155.690955 186.645766,154.099275 C183.459813,152.506298 167.802242,144.800648 164.883297,143.737799 C161.963057,142.676247 159.839952,142.146119 157.715552,145.334664 C155.592447,148.519321 149.492734,155.690955 147.634046,157.815356 C145.776654,159.943645 143.917965,160.209357 140.733309,158.61638 C137.547356,157.018219 127.289573,153.658582 115.121255,142.809751 C105.652831,134.367884 99.2614834,123.942897 97.4027949,120.754351 C95.5454026,117.569695 97.204483,115.84451 98.8013479,114.256719 C100.232305,112.82965 101.987301,110.538045 103.580277,108.679357 C105.169365,106.819372 105.699493,105.492108 106.761045,103.367707 C107.823894,101.242011 107.292469,99.382026 106.496629,97.7890496 C105.699493,96.1960732 99.5103455,80.4464749 96.6782434,74.1484502"
              fill="#FFFFFF"
            />
          </g>
        </svg>
      </a>
      <a className={styles.social_link} href="https://telegram.org/" target="blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="256px"
          height="256px"
          viewBox="0 0 256 256"
          version="1.1"
          preserveAspectRatio="xMidYMid">
          <title>Telegram</title>
          <defs>
            <linearGradient
              x1="50%"
              y1="2.77555756e-15%"
              x2="50%"
              y2="100%"
              id="telegramLinearGradient-1">
              <stop stopColor="#2AABEE" offset="0%" />
              <stop stopColor="#229ED9" offset="100%" />
            </linearGradient>
          </defs>
          <g>
            <path
              d="M128,0 C94.06,0 61.48,13.494 37.5,37.49 C13.5,61.486 0,94.066 0,128 C0,161.934 13.5,194.514 37.5,218.51 C61.48,242.506 94.06,256 128,256 C161.94,256 194.52,242.506 218.5,218.51 C242.5,194.514 256,161.934 256,128 C256,94.066 242.5,61.486 218.5,37.49 C194.52,13.494 161.94,0 128,0 Z"
              fill="url(#telegramLinearGradient-1)"
            />
            <path
              d="M57.94,126.6476 C95.26,110.3916 120.14,99.6736 132.58,94.4956 C168.14,79.7096 175.52,77.1416 180.34,77.0547542 C181.4,77.0376 183.76,77.2996 185.3,78.5456 C186.58,79.5956 186.94,81.0156 187.12,82.0116 C187.28,83.0076 187.5,85.2776 187.32,87.0496 C185.4,107.2896 177.06,156.4056 172.82,179.0756 C171.04,188.668 167.5,191.884 164.08,192.198 C156.64,192.882 151,187.286 143.8,182.5676 C132.54,175.1816 126.18,170.5856 115.24,163.3796 C102.6,155.0516 110.8,150.4736 118,142.9936 C119.88,141.0356 152.64,111.2456 153.26,108.5436 C153.34,108.2056 153.42,106.9456 152.66,106.2816 C151.92,105.6156 150.82,105.8436 150.02,106.0236 C148.88,106.2796 130.9,118.1756 96.02,141.7096 C90.92,145.2176 86.3,146.9276 82.14,146.8376 C77.58,146.7396 68.78,144.2536 62.24,142.1296 C54.24,139.5236 47.86,138.1456 48.42,133.7196 C48.7,131.4156 51.88,129.0576 57.94,126.6476 L57.94,126.6476 Z"
              fill="#FFFFFF"
            />
          </g>
        </svg>
      </a>
      <a className={styles.social_link} href="https://vk.com/" target="blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            fill="#0173F6"
            d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 1.801-2.339 4.157-5.336 2.073-5.336h-3.981c-.772 0-.828.435-1.103 1.083-.995 2.347-2.886 5.387-3.604 4.922-.751-.485-.407-2.406-.35-5.261.015-.754.011-1.271-1.141-1.539-.629-.145-1.241-.205-1.809-.205-2.273 0-3.841.953-2.95 1.119 1.571.293 1.42 3.692 1.054 5.16-.638 2.556-3.036-2.024-4.035-4.305-.241-.548-.315-.974-1.175-.974h-3.255c-.492 0-.787.16-.787.516 0 .602 2.96 6.72 5.786 9.77 2.756 2.975 5.48 2.708 7.376 2.708z"
          />
        </svg>
      </a>
      <Link className={styles.social_link} to="/about-us">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <g fill="none" fillRule="evenodd">
            <path fill="#ffda3e" d="M56 402.667h400V109.333H56z" />
            <path fill="#fc0" d="M256 182.667l-200 220h400z" />
            <path
              d="M456 109.333L276.848 284.116c-11.675 11.4-30.02 11.4-41.696 0L56 109.333h400z"
              fill="#f33"
            />
          </g>
        </svg>
      </Link>
    </div>
  );
};
export default Contacts;
