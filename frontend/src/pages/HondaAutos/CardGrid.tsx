import React, { memo, useEffect, useRef, useState } from "react";
import { FixedSizeGrid as Grid } from "react-window";
import { BlankSlate } from "../../components/BlankSlate";
import { GridWrapper, ListContainer } from "./elements";
import { useHandleResize } from "../../hooks/useHandleResize";
import { HondaAutoCard } from "../../components/Card/HondaAutoCard";
import { useNavigate } from "react-router-dom";
import { useHondaAutosAtom } from "../../hooks/atoms/useHondaAutosAtom";

const COLUMN_WIDTH = 325;
const ROW_HEIGHT = 440;
const gridStyles = {
  margin: "0px auto",
  overflowX: "hidden",
} as const;

type CarGridProps = {
  handleEditClick: (carId: number) => void;
  handleDeleteClick: (carId: number) => void;
};
export const CarGrid = memo(
  ({ handleEditClick, handleDeleteClick }: CarGridProps) => {
    const navigate = useNavigate();
    const { hondaAutos } = useHondaAutosAtom();
    const [numColumns, setNumColumns] = useState(1);

    const gridContainerRef = useRef<HTMLDivElement>(null);

    const handleResize = () => {
      if (gridContainerRef.current) {
        const width = gridContainerRef.current.offsetWidth;
        setNumColumns(Math.max(1, Math.floor(width / COLUMN_WIDTH)));
      }
    };

    useHandleResize(handleResize);
    useEffect(handleResize, []);

    const rowCount = Math.ceil(hondaAutos.length / numColumns);

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
      const auto = hondaAutos[userIndex];
      if (!auto) return null;
      return (
        <div style={style}>
          <HondaAutoCard
            id={auto.id}
            name={auto.name}
            modelYear={auto.modelYear}
            price={auto.price}
            engine={auto.engine}
            fuelType={auto.fuelType}
            color={auto.color}
            imageSrc={auto.imageSrc}
            description={auto.description}
            onClick={() => navigate(`/honda-auto/${auto.id}`)}
            chipText={auto?.chipText}
            onEditClick={(carId) => handleEditClick(carId)}
            onDeleteClick={(id) => handleDeleteClick(id)}
          />
        </div>
      );
    };

    return (
      <ListContainer ref={gridContainerRef}>
        {hondaAutos.length ? (
          <GridWrapper width={numColumns * COLUMN_WIDTH}>
            <Grid
              columnCount={numColumns}
              columnWidth={COLUMN_WIDTH}
              height={580}
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
