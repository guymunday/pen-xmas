import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const PaginationStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .pagination-dots {
    width: 45%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    button {
      display: block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--gold);
      outline: none;
      border: none;
      margin: 0;
      cursor: pointer;
    }
  }
`

export default function HomeScreenPagination({ pagination, setPagination }) {
  return (
    <>
      <PaginationStyles>
        <Link to="/play" className="button-alt">
          Skip
        </Link>
        <div className="pagination-dots">
          <button
            style={{
              width: pagination === 0 ? 15 : 8,
              height: pagination === 0 ? 15 : 8,
            }}
            onClick={() => setPagination(0)}
          />
          <button
            style={{
              width: pagination === 1 ? 15 : 8,
              height: pagination === 1 ? 15 : 8,
            }}
            onClick={() => setPagination(1)}
          />
          <button
            style={{
              width: pagination === 2 ? 15 : 8,
              height: pagination === 2 ? 15 : 8,
            }}
            onClick={() => setPagination(2)}
          />
          <button
            style={{
              width: pagination === 3 ? 15 : 8,
              height: pagination === 3 ? 15 : 8,
            }}
            onClick={() => setPagination(3)}
          />
        </div>
        {pagination !== 3 ? (
          <button
            className="button-alt"
            onClick={() => setPagination(pagination + 1)}
          >
            Next
          </button>
        ) : (
          <Link to="/play" className="button-alt">
            Play
          </Link>
        )}
      </PaginationStyles>
    </>
  )
}
