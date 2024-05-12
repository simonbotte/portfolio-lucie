<script setup>
const props = defineProps({
    content: {
        type: Object,
        required: true,
    },
});
const portfolioAnimatedSvg = ref(null);
onMounted(() => {
    portfolioAnimatedSvg.value.classList.add("active");
});
</script>

<template>
    <section class="hero">
        <div class="hero__wrapper">
            <h1 class="hero__title">
                <span>Lucie</span>
                <!-- <img src="/portfolio-title.svg" alt="coeur" /> -->
                <div class="hero__svg">
                    <svg
                        ref="portfolioAnimatedSvg"
                        width="844"
                        height="224"
                        viewBox="0 0 844 224"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1.5653 187.492C0.561741 156.477 13.7319 121.864 33.2106 95.5356C30.3802 84.0066 27.0746 71.8344 23.0835 59.007L49.6388 58.148L53.2659 73.6722C66.9521 61.6067 82.3354 53.9628 97.2885 53.4732C126.296 52.5301 147.059 72.6305 148.309 111.243C149.506 148.07 127.792 174.243 96.9988 175.24C87.6259 175.542 77.9401 173.176 72.495 170.452L76.9129 148.413C81.6785 150.714 87.7855 152.975 94.9292 152.74C112.112 152.183 121.658 136.455 120.873 112.351C120.138 89.5895 112.082 75.5505 94.8995 76.1075C82.3986 76.513 69.4733 84.3046 58.263 96.7309C62.7847 119.146 65.6981 139.834 66.3598 160.135C67.6753 200.523 58.962 221.146 34.1832 221.94C14.9925 222.567 2.38528 212.695 1.56635 187.482L1.5653 187.492ZM33.4542 199.41C41.0417 199.162 43.6291 189.469 42.7134 161.349C42.3273 149.524 41.2696 137.488 39.0776 125.051C30.0729 143.661 24.5287 165.511 25.2167 186.71C25.4854 194.963 28.0881 199.57 33.4453 199.399L33.4542 199.41Z"
                            fill="#6FA5A0"
                            stroke="#DEDE3E"
                            stroke-width="3"
                            stroke-miterlimit="10"
                            class="svg-elem-1"
                        ></path>
                        <path
                            d="M132.173 113.328C131.878 104.177 132.908 94.7626 134.412 86.0018L158.899 83.1961C157.584 90.8304 157.122 97.3277 157.364 104.693C158.367 135.708 176.261 150.097 200.365 149.313C226.255 148.474 241.817 132.333 241.032 108.228C240.298 85.467 228.454 71.774 209.929 72.3809C196.762 72.807 190.075 80.1783 190.461 92.0035C190.75 100.933 194.577 108.625 199.91 114.705L177.339 121.473C170.623 114.101 165.394 104.441 164.982 91.7185C164.321 71.4082 179.295 50.8207 210.533 49.8003C249.145 48.5495 267.382 73.6433 268.475 107.342C269.616 142.605 243.943 170.464 201.092 171.862C158.02 173.258 133.319 148.822 132.172 113.337L132.173 113.328Z"
                            fill="#6FA5A0"
                            stroke="#DEDE3E"
                            stroke-width="3"
                            stroke-miterlimit="10"
                            class="svg-elem-2"
                        ></path>
                        <path
                            d="M244.653 138.935C244.089 121.531 252.579 100.925 265.868 83.7404C260.632 73.859 254.473 63.1062 247.404 51.7249L275.301 50.8161L282.932 65.7555C296.408 54.1506 312.237 46.4831 327.865 45.974C345.714 45.3964 356.996 55.5313 357.527 71.816C358.104 89.6641 347.797 102.296 332.152 115.975L315.529 99.5379C325.545 91.3903 330.423 83.6376 330.191 76.273C330.027 71.1378 327.263 68.5446 321.683 68.7324C312.754 69.0206 302.018 75.4034 292.281 85.0987C299.982 102.046 305.66 118.621 306.114 132.675C306.848 155.437 297.007 168.711 274.688 169.442C257.284 170.006 245.336 159.891 244.655 138.915L244.653 138.935ZM274.856 146.896C280.213 146.725 282.749 142.396 282.468 133.689C282.206 125.658 280.132 116.782 276.231 106.639C271.183 116.405 267.956 127.016 268.289 137.055C268.48 143.078 270.174 147.047 274.866 146.897L274.856 146.896Z"
                            fill="#6FA5A0"
                            stroke="#DEDE3E"
                            stroke-width="3"
                            stroke-miterlimit="10"
                            class="svg-elem-3"
                        ></path>
                        <path
                            d="M339.743 110.047L338.898 83.9351L314.31 83.392L313.539 59.7318L338.127 60.2749L337.308 35.0612L364.308 34.1786L365.14 59.8462C384.559 59.4338 403.729 58.1405 425.34 56.1084L426.111 79.7686C404.509 81.8117 385.339 83.105 365.911 83.5064L366.749 109.396C367.816 142.197 376.455 153.763 393.193 153.22C406.138 152.801 412.583 144.771 412.21 133.389C411.824 121.564 405.27 112.168 393.612 104.276L411.424 88.7324C428.562 100.458 439.118 115.976 439.661 132.715C440.48 157.929 422.93 174.807 392.802 175.793C361.332 176.819 341.431 162.49 339.733 110.045L339.743 110.047Z"
                            fill="#6FA5A0"
                            stroke="#DEDE3E"
                            stroke-width="3"
                            stroke-miterlimit="10"
                            class="svg-elem-4"
                        ></path>
                        <path
                            d="M382.183 190.433C381.612 172.807 397.398 156.648 419.71 142.302L418.262 125.368C410.109 128.986 401.732 132.157 392.661 135.135L385.286 114.602C397.233 110.86 407.598 106.952 416.841 102.625C413.869 52.4593 417.192 10.1248 458.922 8.76933C477.669 8.15555 495.23 19.2117 496.016 43.3058C496.874 69.8611 477.101 93.7349 443.756 112.693L444.495 121.831L444.919 127.848C458.54 120.703 472.854 114.434 486.509 108.399L492.985 128.968C475.341 136.023 459.469 142.569 446.494 149.019C448.63 187.151 446.751 218.707 418.188 219.637C396.092 220.351 382.694 206.716 382.164 190.421L382.183 190.433ZM416.359 197.142C422.605 196.934 422.908 185.533 421.329 164.583C413.072 171.78 408.4 179.303 408.676 187.778C408.853 193.357 411.446 197.299 416.35 197.131L416.359 197.142ZM468.595 44.6469C468.307 35.7179 464.806 31.1469 458.339 31.352C443.608 31.8348 440.644 50.4671 442.312 88.168C461.299 74.3671 469.078 59.3781 468.595 44.6469Z"
                            fill="#6FA5A0"
                            stroke="#DEDE3E"
                            stroke-width="3"
                            stroke-miterlimit="10"
                            class="svg-elem-5"
                        ></path>
                        <path
                            d="M462.603 112.754C462.308 103.603 463.338 94.1888 464.842 85.428L489.329 82.6223C488.014 90.2566 487.552 96.754 487.794 104.12C488.797 135.134 506.691 149.524 530.795 148.739C556.685 147.9 572.247 131.759 571.463 107.655C570.728 84.8932 558.884 71.2002 540.359 71.8071C527.193 72.2332 520.505 79.6046 520.891 91.4297C521.18 100.359 525.007 108.051 530.34 114.132L507.769 120.899C501.053 113.527 495.825 103.858 495.412 91.1448C494.751 70.8345 509.725 50.2469 540.963 49.2265C579.575 47.9758 597.812 73.0695 598.906 106.768C600.046 142.031 574.373 169.89 531.522 171.288C488.45 172.684 463.749 148.248 462.602 112.764L462.603 112.754Z"
                            fill="#6FA5A0"
                            stroke="#DEDE3E"
                            stroke-width="3"
                            stroke-miterlimit="10"
                            class="svg-elem-6"
                        ></path>
                        <path
                            d="M597.171 148.144C591.474 151.456 585.537 154.553 579.373 157.434L570.66 136.72C577.262 133.603 583.635 130.271 589.542 126.498C588.725 121.837 588.114 116.936 587.949 111.801C586.168 56.9038 600.086 4.16979 637.811 2.94641C657.677 2.29948 673.891 13.1637 674.598 35.0375C675.671 68.0706 654.329 105.625 618.821 133.587C621.522 141.09 625.244 145.665 630.157 145.507C638.411 145.239 646.439 137.827 654.421 122.156L671.391 135.674C659.81 157.271 646.292 167.545 629.1 168.101C615.489 168.54 604.29 160.868 597.172 148.134L597.171 148.144ZM647.164 36.6084C646.902 28.577 642.997 25.3513 637.64 25.5222C623.354 25.9814 614.122 64.9298 615.013 106.008C636.644 84.0788 647.865 58.2503 647.165 36.5985L647.164 36.6084Z"
                            fill="#6FA5A0"
                            stroke="#DEDE3E"
                            stroke-width="3"
                            stroke-miterlimit="10"
                            class="svg-elem-7"
                        ></path>
                        <path
                            d="M654.955 123.489C654.358 104.965 656.982 82.7676 664.13 48.3461L691.584 47.4509C684.424 81.4186 681.795 103.847 682.396 122.14C682.899 137.537 684.661 143.735 690.018 143.564C695.376 143.393 697.239 138.863 696.894 128.369C696.549 117.876 694.057 109.922 689.511 100.465L711.568 91.7023C718.838 102.411 723.233 113.883 723.666 127.272C724.464 151.82 710.604 165.446 689.85 166.12C666.421 166.885 655.919 153.152 654.957 123.469L654.955 123.489ZM663.153 18.219C662.872 9.51193 670.238 2.57383 679.832 2.26507C689.427 1.95631 697.681 8.38423 697.962 17.0913C698.25 26.0204 690.885 32.9585 680.835 33.2898C671.24 33.5986 663.431 27.157 663.142 18.2279L663.153 18.219Z"
                            fill="#6FA5A0"
                            stroke="#DEDE3E"
                            stroke-width="3"
                            stroke-miterlimit="10"
                            class="svg-elem-8"
                        ></path>
                        <path
                            d="M706.004 104.843C705.709 95.6917 706.738 86.2777 708.242 77.517L732.73 74.7112C731.414 82.3456 730.953 88.8429 731.194 96.2085C732.198 127.223 750.092 141.613 774.196 140.828C800.085 139.989 815.648 123.848 814.863 99.7436C814.128 76.9821 802.285 63.2891 783.76 63.8961C770.593 64.3221 763.906 71.6935 764.292 83.5186C764.58 92.4477 768.407 100.14 773.741 106.221L751.17 112.988C744.453 105.616 739.225 95.9466 738.812 83.2337C738.151 62.9234 753.125 42.3358 784.363 41.3155C822.976 40.0647 841.212 65.1584 842.306 98.8573C843.446 134.12 817.774 161.979 774.923 163.377C731.851 164.773 707.15 140.337 706.003 104.853L706.004 104.843Z"
                            fill="#6FA5A0"
                            stroke="#DEDE3E"
                            stroke-width="3"
                            stroke-miterlimit="10"
                            class="svg-elem-9"
                        ></path>
                    </svg>
                </div>
                <span>Levrard</span>
            </h1>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.hero {
    height: 100vh;
    min-height: 500px;
    max-width: 100vw;
    overflow: hidden;
    position: relative;
    &__wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        gap: 16px;
        p {
            font-size: 1.5rem;
            padding: 0 16px;
            text-align: center;
            &:first-child {
                margin-bottom: 8px;
            }
        }
        h1 {
            font-size: 4rem;
            font-family: "TransformaSans", sans-serif;
            text-align: center;
            font-weight: 900;
            color: var(--pale-yellow-base);
            text-transform: lowercase;
            width: fit-content;
            padding: 0 16px;
            .hero__svg {
                rotate: -7deg;
                transition: 100ms;
                svg {
                    width: 350px;
                    height: auto;
                }
            }
            span {
                line-height: 1rem;
                transition: 100ms;
            }
            @media (min-width: 767px) {
                .hero__svg {
                    svg {
                        width: 550px;
                        height: auto;
                    }
                }
                span {
                    font-size: 6rem;
                }
            }
            @media (min-width: 1024px) {
                .hero__svg {
                    svg {
                        width: 850px;
                    }

                    rotate: -5deg;
                }
                span {
                    font-size: 8rem;
                    line-height: 2rem;
                }
            }
        }
    }
    &__title {
        display: flex;
        flex-direction: column;
    }

    /***************************************************
 * Generated by SVG Artista on 5/12/2024, 6:38:16 PM
 * MIT license (https://opensource.org/licenses/MIT)
 * W. https://svgartista.net
 **************************************************/

    svg .svg-elem-1 {
        stroke-dashoffset: 980.1530151367188px;
        stroke-dasharray: 980.1530151367188px;
        -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transition: stroke-dashoffset 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }

    svg.active .svg-elem-1 {
        stroke-dashoffset: 0;
    }

    svg .svg-elem-2 {
        stroke-dashoffset: 746.7947998046875px;
        stroke-dasharray: 746.7947998046875px;
        -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
        transition: stroke-dashoffset 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
    }

    svg.active .svg-elem-2 {
        stroke-dashoffset: 0;
    }

    svg .svg-elem-3 {
        stroke-dashoffset: 634.6801147460938px;
        stroke-dasharray: 634.6801147460938px;
        -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s;
        transition: stroke-dashoffset 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s;
    }

    svg.active .svg-elem-3 {
        stroke-dashoffset: 0;
    }

    svg .svg-elem-4 {
        stroke-dashoffset: 721.439208984375px;
        stroke-dasharray: 721.439208984375px;
        -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6000000000000001s;
        transition: stroke-dashoffset 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6000000000000001s;
    }

    svg.active .svg-elem-4 {
        stroke-dashoffset: 0;
    }

    svg .svg-elem-5 {
        stroke-dashoffset: 914.4984130859375px;
        stroke-dasharray: 914.4984130859375px;
        -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s;
        transition: stroke-dashoffset 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s;
    }

    svg.active .svg-elem-5 {
        stroke-dashoffset: 0;
    }

    svg .svg-elem-6 {
        stroke-dashoffset: 746.7955322265625px;
        stroke-dasharray: 746.7955322265625px;
        -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s;
        transition: stroke-dashoffset 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s;
    }

    svg.active .svg-elem-6 {
        stroke-dashoffset: 0;
    }

    svg .svg-elem-7 {
        stroke-dashoffset: 737.9530029296875px;
        stroke-dasharray: 737.9530029296875px;
        -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.2000000000000002s;
        transition: stroke-dashoffset 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.2000000000000002s;
    }

    svg.active .svg-elem-7 {
        stroke-dashoffset: 0;
    }

    svg .svg-elem-8 {
        stroke-dashoffset: 540.8406372070312px;
        stroke-dasharray: 540.8406372070312px;
        -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.4000000000000001s;
        transition: stroke-dashoffset 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.4000000000000001s;
    }

    svg.active .svg-elem-8 {
        stroke-dashoffset: 0;
    }

    svg .svg-elem-9 {
        stroke-dashoffset: 746.7965698242188px;
        stroke-dasharray: 746.7965698242188px;
        -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.6s;
        transition: stroke-dashoffset 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.6s;
    }

    svg.active .svg-elem-9 {
        stroke-dashoffset: 0;
    }
}
</style>
