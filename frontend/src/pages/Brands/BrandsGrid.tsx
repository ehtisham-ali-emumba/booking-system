import React, { memo, useEffect, useRef, useState } from "react";
import { FixedSizeGrid as Grid } from "react-window";
import { BlankSlate } from "../../components/BlankSlate";
import { GridWrapper, ListContainer } from "./elements";
import { useHandleResize } from "../../hooks/useHandleResize";
import { BrandCard } from "../../components/Card/BrandCard";
import { useNavigate } from "react-router-dom";
import { useBrandsAtom } from "../../hooks/atoms/useBrandsAtom";

const COLUMN_WIDTH = 325;
const ROW_HEIGHT = 440;
const gridStyles = {
  margin: "0px auto",
  overflowX: "hidden",
} as const;

type CarGridProps = {
  handleEditClick: (brandId: number) => void;
  handleDeleteClick: (brandId: number) => void;
};
export const BrandsGrid = memo(
  ({ handleEditClick, handleDeleteClick }: CarGridProps) => {
    const navigate = useNavigate();
    const { brands } = useBrandsAtom();
    const [numColumns, setNumColumns] = useState(1);
    const [gridHeight, setGridHeight] = useState(580);

    const gridContainerRef = useRef<HTMLDivElement>(null);

    const handleResize = () => {
      if (gridContainerRef.current) {
        const width = gridContainerRef.current.offsetWidth;
        setNumColumns(Math.max(1, Math.floor(width / COLUMN_WIDTH)));
        const height = gridContainerRef.current.offsetHeight;
        setGridHeight(height - 8);
      }
    };

    useHandleResize(handleResize);
    useEffect(handleResize, []);

    const rowCount = Math.ceil(brands.length / numColumns);

    const Cell = ({
      columnIndex,
      rowIndex,
      style,
    }: {
      columnIndex: number;
      rowIndex: number;
      style: React.CSSProperties;
    }) => {
      const userIndex = rowIndex * numColumns + columnIndex;
      const auto = brands[userIndex];
      if (!auto) return null;
      return (
        <div style={style}>
          <BrandCard
            id={auto.id}
            name={auto.name}
            imageSrc={auto.logoUrl}
            description={auto.description}
            onClick={() => navigate(`/brands/${auto.id}/autos`)}
            onEditClick={(brandId) => handleEditClick(brandId)}
            onDeleteClick={(id) => handleDeleteClick(id)}
          />
        </div>
      );
    };

    return (
      <ListContainer ref={gridContainerRef}>
        {brands.length ? (
          <GridWrapper width={numColumns * COLUMN_WIDTH}>
            <Grid
              columnCount={numColumns}
              columnWidth={COLUMN_WIDTH}
              height={gridHeight}
              rowCount={rowCount}
              rowHeight={ROW_HEIGHT}
              width={numColumns * COLUMN_WIDTH}
              style={gridStyles}
            >
              {Cell}
            </Grid>
          </GridWrapper>
        ) : (
          <BlankSlate />
        )}
      </ListContainer>
    );
  }
);
