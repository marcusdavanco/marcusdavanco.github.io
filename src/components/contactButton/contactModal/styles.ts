import styled from "styled-components";

export const Container = styled.article`
  max-width: 26.438rem;
  width: 100%;
  padding: 2rem 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (max-width: 820px) {
    padding: 1rem 1.5rem 1rem;
  }

  &:before {
    content: "";
    display: block;
    position: absolute;
    z-index: 0;
    height: 129.72px;
    width: 98.58px;
    right: 44%;
    top: 0;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml,%3Csvg width='99' height='138' viewBox='0 0 99 138' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M75.8943 122.964C72.6925 120.543 69.687 118.383 66.8223 116.049C64.3778 114.058 62.1376 111.817 59.7056 109.808C59.2087 109.398 58.2622 109.531 57.5232 109.414C57.7386 110.2 57.6977 111.291 58.211 111.721C62.0502 114.938 61.3637 119.528 62.0476 123.709C62.7286 127.874 63.262 132.081 64.3143 136.152C64.5165 136.936 66.8592 137.681 68.147 137.579C74.1203 137.106 80.0744 136.366 86.0232 135.621C86.9637 135.504 87.8401 134.877 88.7466 134.485C88.1888 133.849 87.6933 133.143 87.0626 132.591C83.444 129.424 79.7925 126.293 75.8943 122.964ZM72.2695 132.894C72.1323 132.178 71.9948 131.463 71.8571 130.747C72.5428 131.098 73.2285 131.45 73.9141 131.801C73.5139 132.141 73.1134 132.481 72.2695 132.894Z' fill='%23595959'/%3E%3Cpath d='M1.6442 -28.463C8.09221 -26.402 14.307 -24.6017 20.4539 -22.5928C21.7942 -22.1551 22.8183 -20.8217 24.1278 -20.191C24.8686 -19.8347 25.8936 -20.0694 26.7908 -20.0379C26.4763 -20.6952 26.3352 -21.5925 25.8165 -21.9672C23.7688 -23.4451 21.7593 -25.1697 19.4485 -26.0493C14.5058 -27.9317 9.38568 -29.3482 4.3353 -30.9461C4.05807 -31.0338 3.73958 -30.9909 3.4638 -31.0807C2.4352 -31.4145 1.41668 -31.7785 0.394287 -32.1312C0.724803 -30.9702 1.05524 -29.8094 1.6442 -28.463Z' fill='%23595959'/%3E%3Cpath d='M92.9728 85.1008C91.3212 88.1203 89.783 90.8473 88.4282 93.6627C87.9658 94.6251 88.4007 95.6836 89.6657 94.9192C90.9012 94.1718 91.9932 93.0819 92.9201 91.955C94.0384 90.5947 95.4338 89.1524 95.7963 87.5411C96.6738 83.6355 97.0753 79.617 97.5234 75.6277C97.5856 75.0752 96.8269 74.4306 96.4488 73.8284C95.9154 74.4257 95.0594 74.9499 94.9047 75.6324C94.2133 78.6778 93.7222 81.7684 92.9728 85.1008Z' fill='%23595959'/%3E%3Cpath d='M98.9754 44.945C98.4158 41.501 97.9087 38.2767 97.3506 35.0611C97.2696 34.5948 97.0586 33.9832 96.7064 33.7665C95.9586 33.3073 95.078 33.0641 94.2519 32.7324C94.2182 33.4467 94.0902 34.1706 94.1657 34.8732C94.806 40.845 95.4409 46.8184 96.2007 52.7761C96.2999 53.5524 97.0974 54.2396 97.5715 54.9681C98.0024 54.2023 98.7414 53.4618 98.8069 52.6658C99.0117 50.1777 98.9622 47.6681 98.9754 44.945Z' fill='%23595959'/%3E%3Cpath d='M76.3845 2.62052C74.9216 2.72435 74.4007 4.02135 75.3064 4.93891C78.3485 8.01954 81.4261 11.0747 84.6497 13.9604C85.341 14.5792 86.7014 14.4956 87.7651 14.5707C87.8562 14.5773 88.3851 13.0071 88.1206 12.7276C85.3604 9.81114 82.5315 6.95341 79.597 4.21325C78.8366 3.50355 77.6391 3.26264 76.3845 2.62052Z' fill='%23595959'/%3E%3Cpath d='M46.9346 -16.0359C46.4303 -16.0721 46.1449 -16.2167 45.8659 -16.2056C44.6301 -16.1552 42.5366 -16.4267 42.3175 -15.9141C41.5816 -14.1905 43.5021 -13.7794 44.5835 -13.2816C47.9832 -11.7169 51.4768 -10.355 54.9271 -8.89885C55.2106 -8.77889 55.4812 -8.34562 55.6931 -8.38726C56.7248 -8.59201 57.7343 -8.90857 58.7519 -9.18498C58.0338 -9.99876 57.4679 -11.1006 56.5703 -11.5729C53.4951 -13.1916 50.3036 -14.5898 46.9346 -16.0359Z' fill='%23595959'/%3E%3Cpath d='M84.7659 113.089C85.2113 110.38 84.5936 109.603 82.8983 110.753C80.2176 112.571 77.7871 114.82 75.5282 117.156C75.0108 117.691 75.6208 119.318 75.712 120.442C76.5011 120.27 77.5403 120.36 78.0365 119.883C80.2891 117.717 82.3889 115.392 84.7659 113.089Z' fill='%23595959'/%3E%3C/svg%3E%0A");
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    height: 378.17px;
    width: 159.41px;
    bottom: -143.55px;
    opacity: 0.5;
    right: 25%;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml,%3Csvg width='161' height='235' viewBox='0 0 161 235' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M33.7431 32.9344C30.3913 40.2526 27.1385 46.9238 24.2991 53.7673C21.8759 59.6067 20.0516 65.6941 17.6671 71.5522C17.1795 72.7485 15.3816 73.4128 14.1884 74.3224C13.8219 72.7306 12.712 70.8428 13.2098 69.5958C16.9298 60.2661 11.3542 52.8144 8.58716 44.7832C5.82941 36.781 2.77186 28.8465 0.758984 20.6573C0.371216 19.0819 3.79953 15.5398 6.17026 14.4959C17.1661 9.65165 28.3824 5.29833 39.593 0.956717C41.3652 0.269859 43.5091 0.544569 45.4823 0.374786C45.1011 2.02653 44.8979 3.7448 44.3088 5.31873C40.9313 14.3514 37.4608 23.3511 33.7431 32.9344ZM17.9027 18.8479C18.3409 20.2421 18.7781 21.6359 19.2158 23.031C20.0921 21.7581 20.9683 20.4852 21.8451 19.2137C20.8154 18.994 19.7848 18.7739 17.9027 18.8479Z' fill='%232E2E2E'/%3E%3Cpath d='M46.6062 370.881C56.0314 361.112 65.2927 352.025 74.2358 342.634C76.1861 340.587 76.7266 337.259 78.4391 334.901C79.4082 333.567 81.4412 333.007 82.9953 332.099C83.0648 333.558 83.6688 335.277 83.1092 336.431C80.8989 340.988 78.9904 345.943 75.7468 349.693C68.8095 357.715 61.116 365.084 53.7182 372.706C53.3122 373.125 52.709 373.352 52.3075 373.773C50.8087 375.34 49.3565 376.951 47.8866 378.545C47.3665 376.181 46.8463 373.818 46.6062 370.881Z' fill='%232E2E2E'/%3E%3Cpath d='M99.8923 83.5487C94.1056 79.7877 88.7974 76.4352 83.7288 72.7523C81.9974 71.4928 81.759 69.2105 84.7191 69.3574C87.6111 69.5024 90.5752 70.3886 93.2831 71.4971C96.5508 72.8358 100.386 74.0556 102.558 76.5559C107.82 82.6173 112.349 89.3307 116.933 95.9482C117.568 96.8645 116.841 98.7239 116.746 100.147C115.236 99.599 113.227 99.4874 112.305 98.4294C108.189 93.7098 104.383 88.7199 99.8923 83.5487Z' fill='%232E2E2E'/%3E%3Cpath d='M148.666 148.741C150.952 155.354 153.122 161.529 155.194 167.737C155.494 168.637 155.703 169.917 155.287 170.635C154.403 172.156 153.08 173.423 151.937 174.794C151.198 173.565 150.284 172.408 149.749 171.096C145.202 159.944 140.644 148.793 136.322 137.552C135.759 136.087 136.514 134.116 136.659 132.379C138.147 133.321 140.156 133.926 141.028 135.269C143.755 139.468 146.054 143.946 148.666 148.741Z' fill='%232E2E2E'/%3E%3Cpath d='M149.017 244.946C146.335 246.153 144.182 244.358 144.909 241.877C147.351 233.546 149.881 225.226 152.829 217.066C153.461 215.317 155.943 214.171 157.749 213.027C157.904 212.929 160.33 215.198 160.129 215.943C158.028 223.717 155.75 231.452 153.174 239.079C152.506 241.055 150.621 242.619 149.017 244.946Z' fill='%232E2E2E'/%3E%3Cpath d='M114.756 305.883C113.9 306.426 113.534 306.953 113.03 307.198C110.801 308.284 107.363 310.754 106.488 310.057C103.551 307.713 106.55 305.162 107.986 303.255C112.501 297.26 117.375 291.534 122.082 285.683C122.469 285.202 122.535 284.18 122.949 284.052C124.965 283.432 127.048 283.032 129.107 282.552C128.613 284.672 128.662 287.155 127.526 288.842C123.635 294.624 119.33 300.127 114.756 305.883Z' fill='%232E2E2E'/%3E%3Cpath d='M58.7948 41.9358C62.1564 46.2949 61.8041 48.2532 57.7181 47.8353C51.2564 47.1734 44.8268 45.5128 38.6184 43.5373C37.1962 43.0844 36.7264 39.6319 35.8185 37.5598C37.375 37.1127 39.1248 35.9668 40.4539 36.3366C46.4902 38.0193 52.408 40.1281 58.7948 41.9358Z' fill='%232E2E2E'/%3E%3C/svg%3E%0A");
  }

  h2 {
    margin-bottom: 0.5rem;
    z-index: 1;

    &.success {
      transform: translateY(14.75rem);
    }
  }

  & > button {
    &:first-of-type {
      position: absolute;
      right: -14px;
      top: -14px;
      padding: 0 5px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    z-index: 1;

    div {
      width: 100%;
    }
  }

  div {
    label {
      font-size: 1.125rem;
      line-height: 1.5rem;
      margin-bottom: 0.25rem;
    }

    display: flex;
    flex-direction: column;

    input,
    textarea {
      width: 100%;
      height: 2rem;
      margin-bottom: 0.5rem;
      background-color: #2e2e2e;
      border-radius: 0.25rem;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
      border: none;
      color: #c9c9c9;
      padding: 0.5rem;
      font-size: 1rem;

      &:focus {
        border: 2px solid #B3006C;
      }
    }

    textarea {
      height: 11.25rem;
      margin-bottom: 1.5rem;
      resize: none;
    }
  }
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: #9c9c9c;
  text-align: center;
  margin-bottom: 2rem;
  max-width: 19.313rem;
  z-index: 1;

  &.success {
    transform: translateY(14.375rem);
  }
`;
