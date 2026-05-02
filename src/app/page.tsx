import Table from "~/shared/components/Table/Table";
import { data } from "~/shared/data/data";
import { type CategoryKey, getCategory, type Points } from "~/shared/data/data.types";

const categories = Object.keys(data) as CategoryKey[];
const points = ["200", "400", "600", "800", "1000"] as Points[];

export default function Home() {
  return (
    <Table>
      {categories.map(category => (
        <Table.Header key={category}>{getCategory(category).title}</Table.Header>
      ))}

      {points.map(point =>
        categories.map(category => {
          const cell = data[category][point];

          return <Table.Data key={category + point}>{cell ? point : ""}</Table.Data>;
        })
      )}
    </Table>
  );
}
