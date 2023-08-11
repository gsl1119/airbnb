import { styled } from "styled-components";

export const ItemWrapper = styled.div`
  box-sizing: border-box;
  width: 25%;
  padding: 8px;

  .inner {
    width: 100%;
    cursor: pointer;

    .cover {
      position: relative;
      box-sizing: border-box;
      padding: 66.66% 8px 0;
      border-radius: 3px;
      overflow: hidden;

      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }

    .desc {
      margin: 10px 0 5px;
      font-size: 12px;
      font-weight: 700;
      color: #395768;
    }

    .name {
      font-size: 16px;
      font-weight: 700;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      --webkie-line-clamp: 2;
      --webkie-box-orinent: vertical;
    }
  }
`;
