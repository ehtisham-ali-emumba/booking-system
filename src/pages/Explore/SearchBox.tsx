import { useState } from "react";
import { Row, Col } from "antd";
import {
  EnvironmentOutlined,
  CalendarOutlined,
  DollarOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Input } from "../../components";
import { CustomRangePicker } from "../../components";
import { Select } from "../../components/Select";
import {
  CardUI,
  ItemWrapper,
  IconCircle,
  HeaderText,
  Divider,
  SearchButton,
} from "./elements";
import { generateParams, priceRanges } from "./utils";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [location, setLocation] = useState<string>("");
  const [dateRange, setDateRange] = useState<[string, string] | []>([]);
  const [priceRange, setPriceRange] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    const params = generateParams({
      location,
      start_date: dateRange?.[0],
      end_date: dateRange?.[1],
      price: priceRange,
    });
    navigate(`/tours?${params}`);
  };

  const dateHandler = (dates: any, dateStrings: [string, string]) => {
    if (!dates) setDateRange([]);
    else setDateRange([dateStrings[0], dateStrings[1]]);
  };

  return (
    <CardUI>
      <Row align="middle" justify="space-between">
        {/* Location */}
        <Col flex="1">
          <ItemWrapper>
            <IconCircle>
              <EnvironmentOutlined style={{ fontSize: 20, color: "grey" }} />
            </IconCircle>
            <div>
              <HeaderText>Location</HeaderText>
              <Input
                inputProps={{
                  placeholder: "Where you want to go?",
                  variant: "borderless",
                  value: location,
                  onChange: (e) => setLocation(e.target.value),
                }}
              />
            </div>
          </ItemWrapper>
        </Col>

        <Divider />

        <Col flex="1">
          <ItemWrapper>
            <IconCircle>
              <CalendarOutlined style={{ fontSize: 18, color: "grey" }} />
            </IconCircle>
            <div>
              <HeaderText>Choose Date</HeaderText>
              <CustomRangePicker
                dateProps={{
                  onChange: dateHandler,
                  needConfirm: true,
                }}
              />
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
              <HeaderText>Price Range</HeaderText>
              <Select
                selectProps={{
                  variant: "borderless",
                  placeholder: "Choose Here",
                  size: "small",
                  value: priceRange,
                  onChange: (value) => setPriceRange(value),
                  options: priceRanges,
                }}
              />
            </div>
          </ItemWrapper>
        </Col>

        {/* Search Button */}
        <Col>
          <SearchButton onClick={handleSearch}>
            <SearchOutlined style={{ fontSize: 28, color: "#fff" }} />
          </SearchButton>
        </Col>
      </Row>
    </CardUI>
  );
};

export default SearchBox;
