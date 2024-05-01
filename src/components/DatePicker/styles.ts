import { DayPicker } from "react-day-picker";
import styled from "styled-components";

export const StyledDayPicker = styled(DayPicker)`
  .root {
    width: 100%;
  }

  .caption {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav {
    display: flex;
    gap: 1rem;
  }

  .nav_button_previous,
  .nav_button_next {
    text-decoration: none;
    color: blue;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent !important;
  }

  .head_cell {
    text-transform: uppercase;
    font-size: 12px;
    color: blue;
    font-weight: bold;
    padding-top: 4px;
    padding-bottom: 8px;
  }

  .button {
    color: gray;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s;
  }

  .day_today {
    background-color: #f0f0f0;
    font-weight: bold;
    color: #333;
  }

  .day_selected {
    background-color: blue;
    color: white;
    font-weight: medium;
  }
`;
