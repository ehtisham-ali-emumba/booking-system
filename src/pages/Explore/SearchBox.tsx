import { Card, Row, Col } from "antd";
import {
  EnvironmentOutlined,
  CalendarOutlined,
  DollarOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { Button, Input } from "../../components";
import { Link } from "react-router-dom";
import { CustomRangePicker } from "../../components";
import { Select } from "../../components/Select";

// Styled Components
const StyledCard = styled(Card)`
  border-radius: 20px;
  padding: 0px 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  margin-bottom: -63px;
`;

const IconCircle = styled.div`
  background: #f0f0f0;
  border-radius: 50%;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  margin-top: 4px;
`;

const Label = styled.div`
  font-weight: bold;
  color: #1e1e2f;
  font-size: 20px;
`;

const Subtext = styled.div`
  color: #8c8c8c;
  font-size: 14px;
  margin-top: 4px;
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 220px;
`;

const Divider = styled.div`
  width: 1px;
  background: #e0e0e0;
  height: 60px;
  margin: 0 52px 0 16px;
`;

const SearchButton = styled((props) => <Button variant="primary" {...props} />)`
  border-radius: 16px;
  padding: 20px 12px;
  height: 90px;
`;

const SearchBox = () => {
  return (
    <StyledCard>
      <Row align="middle" justify="space-between">
        {/* Location */}
        <Col flex="1">
          <ItemWrapper>
            <IconCircle>
              <EnvironmentOutlined style={{ fontSize: 20, color: "grey" }} />
            </IconCircle>
            <div>
              <Label>Location</Label>
              <Input
                inputProps={{
                  placeholder: "Where you want to go?",
                  variant: "borderless",
                }}
              />
            </div>
          </ItemWrapper>
        </Col>

        <Divider />

        {/* Date */}
        <Col flex="1">
          <ItemWrapper>
            <IconCircle>
              <CalendarOutlined style={{ fontSize: 18, color: "grey" }} />
            </IconCircle>
            <div>
              <Label>Choose Date</Label>
              <CustomRangePicker />
            </div>
          </ItemWrapper>
        </Col>

        <Divider />

        {/* Price */}
        <Col flex="1">
          <ItemWrapper>
            <IconCircle>
              <DollarOutlined style={{ fontSize: 18, color: "grey" }} />
            </IconCircle>
            <div>
              <Label>Price Range</Label>
              <Select
                selectProps={{
                  variant: "borderless",
                  placeholder: "Choose Here",
                  size: "small",
                  options: [
                    { value: "jack", label: "Jack" },
                    { value: "lucy", label: "Lucy" },
                    { value: "Yiminghe", label: "yiminghe" },
                  ],
                }}
              />
            </div>
          </ItemWrapper>
        </Col>

        {/* Search Button */}
        <Col>
          <Link to="/tours">
            <SearchButton>
              <SearchOutlined style={{ fontSize: 28, color: "#fff" }} />
            </SearchButton>
          </Link>
        </Col>
      </Row>
    </StyledCard>
  );
};

export default SearchBox;
