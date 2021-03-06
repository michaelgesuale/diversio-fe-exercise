import ColorWidget from './components/ColorWidget';

const COLOR_LIST = [
    "#D7CEE4",
    "#CFB4F7",
    "#6221EA",
    "#0725E8",
    "#B6BFF6",
    "#FEBECD",
    "#FBC02D",
    "#109CF1",
    "#FF2455",
    "#FF8A00",
    "#8F40EB",
    "#AF5EEC",
    "#CA7DEF",
    "#DF9CF3",
    "#F1BCF8",
    "#FFDCFF",
    "#FBC4ED",
    "#F8ABD6",
    "#F591BC",
    "#F1779E",
    "#E95D7E",
    "#DE425B",
    "#FF005B",
    "#FF533B",
    "#FF811D",
    "#FFA600",
]

function App() {
  return (
      <ColorWidget colorList={COLOR_LIST} />
  );
}

export default App;
