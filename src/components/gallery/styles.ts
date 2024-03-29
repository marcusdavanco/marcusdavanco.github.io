import styled, { keyframes } from "styled-components";

const wiggle = keyframes`
 0% { transform: rotate(20deg); } 
 25% { transform: rotate(12deg); }
 50% { transform: rotate(20.5deg); }
 75% { transform: rotate(10deg); }
 100% { transform: rotate(20deg); }
`

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 7.5rem;
  border-bottom: 4px solid #ff0d62;
  padding-bottom: 3.75rem;
  position: relative;

  @media (max-width: 820px) {
    margin-top: 3.75rem;
  }

  &:after {
    content: "";
    width: 60.53px;
    height: 157px;
    /* background-image: url("data:image/svg+xml,%3Csvg width='62' height='158' viewBox='0 0 62 158' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40.4977 144.442C42.4423 141.671 44.2967 139.159 45.9932 136.545C47.4409 134.315 48.6599 131.936 50.0931 129.695C50.386 129.237 51.1804 129.1 51.7433 128.815C51.7735 129.501 52.0885 130.366 51.7875 130.844C49.5371 134.419 51.2748 137.927 51.8067 141.46C52.3369 144.98 52.9963 148.495 53.2041 152.036C53.2443 152.717 51.5561 153.921 50.4958 154.172C45.5781 155.337 40.6067 156.282 35.6385 157.222C34.8531 157.371 33.9873 157.094 33.1582 157.014C33.4419 156.36 33.657 155.664 34.0207 155.058C36.1068 151.58 38.2288 148.122 40.4977 144.442ZM45.975 151.477C45.9002 150.867 45.8256 150.257 45.751 149.646C45.2915 150.106 44.8319 150.566 44.3723 151.025C44.7814 151.194 45.1909 151.364 45.975 151.477Z' fill='%23707070'/%3E%3Cpath d='M60.9579 3.67796C56.3141 6.99956 51.7902 10.0516 47.3748 13.2535C46.4119 13.9515 45.9345 15.2867 45.0462 16.1316C44.5437 16.6092 43.6601 16.6857 42.9479 16.943C43.0305 16.334 42.9118 15.5771 43.2313 15.1423C44.4931 13.4263 45.6606 11.5222 47.2883 10.2187C50.7697 7.42966 54.514 4.96874 58.1554 2.38022C58.3553 2.23808 58.6221 2.1902 58.8203 2.04681C59.5598 1.51291 60.2833 0.957357 61.013 0.409912C61.0478 1.42738 61.0826 2.44478 60.9579 3.67796Z' fill='%23707070'/%3E%3Cpath d='M16.9979 118.46C19.1045 120.457 21.0443 122.249 22.8599 124.159C23.4799 124.812 23.4044 125.774 22.1913 125.488C21.0061 125.207 19.8477 124.614 18.8122 123.949C17.5628 123.146 16.0696 122.349 15.362 121.149C13.6478 118.241 12.2865 115.118 10.8955 112.032C10.7026 111.604 11.1451 110.891 11.293 110.309C11.8756 110.651 12.6984 110.85 12.999 111.358C14.3414 113.625 15.5347 115.979 16.9979 118.46Z' fill='%23707070'/%3E%3Cpath d='M1.79726 87.7745C1.35613 84.8649 0.929605 82.1453 0.54636 79.4194C0.490769 79.0241 0.502079 78.4786 0.728788 78.2136C1.21046 77.6516 1.85454 77.2287 2.43195 76.7488C2.64372 77.3136 2.93361 77.8617 3.05469 78.4452C4.08454 83.405 5.11919 88.3647 6.04944 93.344C6.17047 93.9929 5.70791 94.7508 5.51565 95.4582C4.97175 94.9548 4.187 94.5514 3.92865 93.9293C3.12099 91.9848 2.51192 89.9572 1.79726 87.7745Z' fill='%23707070'/%3E%3Cpath d='M8.99128 47.9552C10.1926 47.6603 10.9461 48.5669 10.4562 49.5377C8.8104 52.7974 7.12954 56.0458 5.28762 59.1958C4.89261 59.8713 3.77883 60.156 2.94432 60.4913C2.87289 60.5201 2.04231 59.3963 2.18239 59.1035C3.64436 56.0485 5.17664 53.0229 6.82405 50.0644C7.25103 49.298 8.1501 48.795 8.99128 47.9552Z' fill='%23707070'/%3E%3Cpath d='M27.8109 25.3637C28.2064 25.2043 28.3981 25.0143 28.625 24.9511C29.6301 24.6721 31.2406 23.9129 31.5491 24.2678C32.5854 25.4613 31.15 26.2878 30.4105 26.967C28.0857 29.1022 25.6331 31.0988 23.2396 33.1598C23.0429 33.3294 22.9377 33.7472 22.7569 33.7685C21.8757 33.8709 20.9833 33.8777 20.095 33.9189C20.4611 33.0799 20.6306 32.049 21.229 31.4378C23.2794 29.3433 25.4801 27.3957 27.8109 25.3637Z' fill='%23707070'/%3E%3Cpath d='M30.8223 138.808C29.7644 136.748 30.0595 135.965 31.7177 136.45C34.3399 137.216 36.8727 138.394 39.2899 139.684C39.8436 139.98 39.7746 141.444 39.992 142.37C39.3141 142.437 38.5029 142.777 37.9814 142.523C35.613 141.366 33.3261 140.043 30.8223 138.808Z' fill='%23707070'/%3E%3C/svg%3E%0A"); */
    left: 42%;
    bottom: 5%;
    position: absolute;
    z-index: -1;
    animation-name: ${wiggle};
    animation-duration: 8s;
    animation-iteration-count: infinite;

    @media (max-width: 820px) {
      transform: scaleX(-100%);
      bottom: 1%;
      left: 75%;
      opacity: 0.5;
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 22.5rem);
  grid-template-rows: repeat(2, 20rem) 2.75rem;
  place-content: center;
  grid-column-gap: 2.5rem;
  grid-row-gap: 2rem;

  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;

    align-items: center;
  }
`;

interface CardProps {
  imageUrl: string;
  animate?: boolean;
}

export const Card = styled.a<CardProps>`
  height: 100%;
  width: 100%;
  border-radius: 4px;
  border: 4px solid transparent;
  /* box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.05); */
  transition: border 0.5s ease-in-out;
 

  &:before {
    height: 100%;
    width: 100%;
    content: "";
    display: inline-block;
    background-image: url(${(props: CardProps) => props.imageUrl});
    background-size:  ${props => !props.animate ? "cover" : "fill"};
    background-position-x: center;
    transition: background-position 10s ease-in-out, filter 0.5s ease-in-out;
    filter: grayscale(100%);
    min-height: 300px;
  }
 

  &:hover:before {
    background-position-y: 100%;
    filter: grayscale(0%)
  }

  &:hover {
    border: 4px solid #ff0d62;
  }

  @media (max-width: 820px) {
    min-width: 22.5rem;
    min-height: 20rem;
    max-width: 80.69%;
    height: auto;
  }
`;
