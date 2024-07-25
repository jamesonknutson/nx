import { ComponentProps } from 'react';

export function NrwlLogo(
   props: ComponentProps<'svg'> & { title?: string; titleId?: string }
): JSX.Element {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         fill="currentColor"
         {...props}
      >
         <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 18.9947C9.99253 18.996 9.98382 18.996 9.97444 18.996C9.89202 18.9986 9.8084 19 9.72598 19C8.82142 19 7.94802 18.8672 7.12155 18.6189C7.06659 18.6013 7.01233 18.5831 6.95618 18.563C6.69206 18.4746 6.43664 18.3686 6.18762 18.2482C5.80872 18.4706 5.38861 18.6267 4.93846 18.6982C4.83549 18.7138 4.73307 18.7256 4.62756 18.7327C4.42408 18.747 4.22497 18.7443 4.02885 18.7242L4.02766 18.7229C3.79167 18.6982 3.54877 18.693 3.30356 18.7099C2.8802 18.7392 2.47642 18.8316 2.09927 18.9785C2.04678 18.8367 2.01442 18.6845 2.00381 18.5258C1.94952 17.6754 2.56683 16.9405 3.38217 16.8838C3.68735 16.8624 3.96833 16.934 4.21425 17.0822C4.34793 17.1589 4.49765 17.2155 4.65502 17.2486C4.63257 17.2292 4.60944 17.209 4.58825 17.1894C4.58145 17.1843 4.57518 17.1784 4.56894 17.172C4.42774 17.049 4.29054 16.9197 4.15996 16.7831C3.96956 16.5951 3.73428 16.3382 3.50076 16.0046C3.48025 15.9772 3.45955 15.9481 3.43833 15.9187C3.38217 15.8395 3.32654 15.7601 3.27296 15.6782C3.01388 15.2835 2.78907 14.8614 2.60491 14.4178C2.5844 14.3691 2.56441 14.3204 2.54509 14.2695C2.48579 14.12 2.43207 13.9679 2.38271 13.8144C2.36582 13.7643 2.34964 13.713 2.33403 13.6609C2.30533 13.5634 2.2785 13.4652 2.25284 13.3669C2.24032 13.3182 2.22724 13.2694 2.21611 13.2187C2.18794 13.101 2.1629 12.9833 2.14116 12.8644C2.1224 12.7648 2.10432 12.6633 2.08922 12.5612C2.07996 12.4987 2.07125 12.4358 2.06378 12.3719C2.05616 12.3181 2.04992 12.2621 2.04431 12.2069C2.03931 12.156 2.03441 12.1073 2.02937 12.0573C2.02937 12.0475 2.02813 12.0384 2.02813 12.0292C2.02313 11.976 2.01943 11.9232 2.01685 11.8706C2.01252 11.8134 2.00882 11.7568 2.00747 11.6996C2.00258 11.5871 2 11.4733 2 11.3583C2 11.2918 2.00135 11.2275 2.00258 11.1625C2.00381 11.1079 2.00501 11.0538 2.00747 10.9998C2.00882 10.9693 2.01128 10.9388 2.01252 10.9081C2.01562 10.8632 2.01823 10.8185 2.02189 10.7748C2.02571 10.7098 2.03194 10.6461 2.03822 10.5817C2.04188 10.5375 2.04678 10.4939 2.0525 10.4491C2.0612 10.3711 2.07125 10.293 2.08242 10.2149C2.08676 10.1856 2.09057 10.1577 2.09546 10.1291C2.1017 10.09 2.10675 10.0517 2.11422 10.0133C2.12483 9.95156 2.13611 9.88923 2.14863 9.82861C2.16047 9.76624 2.17299 9.70504 2.1867 9.6433C2.19978 9.58606 2.2123 9.53081 2.22601 9.47358C2.33403 9.03397 2.47761 8.61061 2.65553 8.20742C2.67605 8.1594 2.69742 8.11322 2.71916 8.06704C2.82225 7.84332 2.93512 7.62598 3.05824 7.41604C3.11805 7.31262 3.18049 7.21189 3.24535 7.11299C3.31092 7.0121 3.37836 6.91265 3.44842 6.81519C3.51709 6.71956 3.58808 6.6259 3.65933 6.53299C3.70245 6.48156 3.74422 6.42829 3.78734 6.37686C3.82294 6.33593 3.85844 6.29367 3.89409 6.25259C3.93395 6.20784 3.97337 6.16349 4.01391 6.11871C4.05321 6.07509 4.0951 6.03159 4.13564 5.98922C4.14326 5.97946 4.15126 5.97168 4.15996 5.96386C4.22987 5.89106 4.30235 5.82079 4.37472 5.75064C4.89792 5.25181 5.49154 4.83231 6.13893 4.50988C6.18257 4.48708 6.22692 4.46424 6.27247 4.44483C6.48477 4.3427 6.70196 4.25286 6.9242 4.17353C6.97236 4.1561 7.01981 4.14038 7.06782 4.12423C7.09599 4.11501 7.12278 4.10595 7.15024 4.09816C7.19145 4.0833 7.23199 4.07155 7.27264 4.05976C7.34378 4.0384 7.41488 4.01825 7.48617 4C5.12258 4.70426 2.49192 6.95362 2.49192 10.875C2.49192 15.859 6.47348 16.824 8.32568 17.7201C9.44882 18.2624 9.85395 18.719 10 18.9947Z"
         />
         <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.90657 17.0587C9.85993 17.2489 9.66138 17.3641 9.46073 17.3143C9.26076 17.2662 9.13694 17.0722 9.18285 16.8819C9.22961 16.6924 9.38156 16.7738 9.58026 16.823C9.78076 16.871 9.95317 16.8697 9.90657 17.0587ZM6.00468 13.816C5.86286 13.9331 5.61197 13.8627 5.44584 13.6597C5.27917 13.4561 5.25872 13.1966 5.4005 13.0794C5.5416 12.9623 5.79134 13.0328 5.95931 13.2358C6.12529 13.4394 6.14647 13.6987 6.00468 13.816ZM4.77002 12.3326C4.63336 12.3652 4.48656 12.2307 4.44123 12.0355C4.39516 11.8402 4.46932 11.655 4.60595 11.6236C4.74261 11.5922 4.88956 11.7255 4.93489 11.9208C4.98012 12.1162 4.90611 12.3012 4.77002 12.3326ZM4.70878 10.4688C4.77767 10.4662 4.83833 10.5456 4.84223 10.6462C4.84667 10.7461 4.79311 10.8301 4.72285 10.8326C4.65381 10.8365 4.59314 10.757 4.5894 10.6565C4.58565 10.5561 4.63852 10.4726 4.70878 10.4688ZM5.33662 10.1602C5.35069 9.95901 5.47577 9.80538 5.61576 9.81431C5.7549 9.82519 5.85647 9.99556 5.84187 10.1966C5.8278 10.3971 5.70315 10.5507 5.56274 10.5406C5.42344 10.5317 5.32187 10.3606 5.33662 10.1602ZM17.5589 10.6148C17.5385 10.611 17.518 10.6071 17.497 10.6027C17.4695 10.5964 17.4421 10.59 17.414 10.5822C17.3871 10.5752 17.3597 10.5675 17.3328 10.5586C17.3321 10.5579 17.3316 10.5579 17.3309 10.5579C17.3136 10.5522 17.2964 10.5463 17.2791 10.5406C17.2453 10.5291 17.2115 10.5156 17.1775 10.5015C17.1775 10.5008 17.177 10.5015 17.177 10.5015C17.0927 10.4669 17.0096 10.4253 16.9299 10.3779C16.8283 10.3183 16.7312 10.2491 16.6411 10.1722C16.5734 10.1153 16.5102 10.0532 16.452 9.98717C16.4323 9.96541 16.4131 9.94295 16.3951 9.91992C16.2854 9.78346 16.1985 9.63233 16.1423 9.47162C15.7041 7.89474 14.7639 6.52609 13.5057 5.55255C12.2462 4.57835 10.6685 4 8.95494 4C8.32641 4 7.71512 4.07813 7.13139 4.22547C7.12374 4.22796 7.1174 4.22938 7.10975 4.23191C4.6915 4.92553 2 7.14088 2 11.003C2 15.9116 6.07364 16.8621 7.96868 17.7447C9.11779 18.2788 9.53244 18.7285 9.68172 19C10.9452 18.9647 12.1478 18.6842 13.2444 18.2033C13.3474 18.1551 13.4328 18.1001 13.5031 18.0406C13.5504 18.0732 13.6059 18.095 13.6648 18.1039L23 18.9839L13.8397 17.3457C13.8333 17.3443 13.827 17.3431 13.8219 17.3418C13.813 17.1099 13.6098 16.9563 13.5319 16.8505C13.4641 16.759 13.4616 16.6981 13.4616 16.6981C13.3977 15.7676 12.9781 14.9329 12.3387 14.3335C11.7678 13.7981 11.0243 13.447 10.1992 13.378V13.3766C10.111 13.2075 9.97809 13.0628 9.81708 12.9609C9.56482 12.763 9.40258 12.4434 9.40258 12.0969V12.0905C8.86671 12.1385 8.42993 12.5331 8.31804 13.0493C7.31733 12.5517 6.63008 11.5166 6.63008 10.3215C6.63008 9.49155 6.96025 8.73892 7.4968 8.19068C8.22106 7.42521 9.2296 6.96297 10.3632 6.96297C12.2033 6.96297 13.7504 8.21762 14.2012 9.91992C13.9087 10.2837 13.4604 10.5443 13.0158 10.6187C12.1906 10.7621 11.5417 11.4218 11.412 12.2532C12.1759 12.2532 12.6843 13.2984 14.1042 13.2984H14.1048C14.4586 13.2984 14.7787 13.1563 15.0117 12.9245C15.0341 12.902 15.0551 12.8796 15.0763 12.8558C15.0968 12.8321 15.1165 12.8078 15.135 12.7828C15.149 12.7643 15.1624 12.7451 15.1759 12.7252C15.1893 12.706 15.2015 12.6856 15.2136 12.6651C15.2379 12.6248 15.2595 12.5824 15.2794 12.5389C15.2858 12.5248 15.2922 12.5101 15.2979 12.4953L15.2986 12.4959C15.3107 12.5253 15.3241 12.5536 15.3375 12.5818C15.3515 12.6107 15.3669 12.6381 15.3828 12.6651C15.4072 12.706 15.4333 12.7451 15.4614 12.7828C15.471 12.795 15.4806 12.8078 15.4901 12.8201C15.51 12.8444 15.531 12.8681 15.5522 12.8904C15.5629 12.902 15.5739 12.9135 15.5847 12.9245C15.6849 13.0237 15.8006 13.1063 15.9283 13.1691C15.9564 13.1825 15.9852 13.1953 16.0146 13.2075C16.1628 13.2658 16.3237 13.2984 16.4922 13.2984C16.5191 13.2984 16.5453 13.2978 16.5709 13.2972C16.597 13.2966 16.6226 13.2952 16.6481 13.294C16.6737 13.2927 16.6992 13.2913 16.7242 13.2888C16.7464 13.287 16.7689 13.285 16.7906 13.2825C16.8372 13.2773 16.8825 13.2709 16.9272 13.2638C16.9464 13.2606 16.9655 13.2568 16.9841 13.2536C17.0032 13.2499 17.0218 13.246 17.0403 13.2421C17.0588 13.2383 17.0773 13.2344 17.0959 13.2299C17.1137 13.2255 17.1316 13.221 17.1496 13.2165C17.2031 13.2024 17.2549 13.187 17.3053 13.1703C17.3762 13.1466 17.4439 13.1211 17.5091 13.0929C17.5257 13.0858 17.5423 13.0788 17.5589 13.0704C17.5666 13.0672 17.5743 13.064 17.5819 13.0602C17.5889 13.0563 17.5967 13.0526 17.6043 13.0493C18.2596 12.7406 18.6627 12.2532 19.1845 12.2532C19.056 11.4295 18.4186 10.775 17.6043 10.6239L17.5589 10.6148Z"
         />
      </svg>
   );
}
