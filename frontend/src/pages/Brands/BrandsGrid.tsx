import React, { memo, useEffect, useRef, useState } from "react";
import { FixedSizeGrid as Grid } from "react-window";
import { BlankSlate } from "../../components/BlankSlate";
import { GridWrapper, ListContainer } from "./elements";
import { useHandleResize } from "../../hooks/useHandleResize";
import type { BrandType } from "../../atoms/brandsAtom";
import { uiStrings } from "../../constants";
import { BrandCard } from "../../components";

const COLUMN_WIDTH = 325;
const ROW_HEIGHT = 390;
const gridStyles = {
  margin: "0px auto",
  overflowX: "hidden",
} as const;

type CarGridProps = {
  handleEditClick: (brandId: number) => void;
  handleDeleteClick: (brandId: number) => void;
  brands: BrandType[];
};
export const BrandsGrid = memo(
  ({ handleEditClick, handleDeleteClick, brands }: CarGridProps) => {
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
      const brand = brands[userIndex];
      if (!brand) return null;

      return (
        <div style={style}>
          <BrandCard
            id={brand.id}
            name={brand.name}
            imageSrc={brand.logoUrl}
            description={brand.description}
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
          <BlankSlate message={uiStrings.brandNotFound} />
        )}
      </ListContainer>
    );
  }
);
