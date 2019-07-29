import { format, dateFormatter } from "../src/dateFormatter";

it('when the system date and the date to format are the same day formats as "TODAY"', () => {
  const December = 11; //js Date object month is indexed from 0
  const systemDateTime = new Date(2018, December, 15, 10, 5).getTime();
  const dateTimeToFormat = new Date(2018, December, 15, 12, 50).getTime(); //Same day different time
  expect(format(dateTimeToFormat, systemDateTime)).toBe("TODAY");
});

it("input date follows the initail format DD/MM/YYYY", () => {
  const date = "2018-12-15";
  expect(dateFormatter(date)).toBe("15/12/2018");
});
