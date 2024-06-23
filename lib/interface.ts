export interface Position {
  left: number;
  width: number;
  opacity: number;
}

export type TabProps = {
  name: string;
  hash: string;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
};

export type CursorProps = {
  position: Position;
};

export type SectionHeadingProps = {
  title: string;
};
