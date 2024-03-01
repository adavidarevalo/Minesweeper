import { Select } from '@chakra-ui/react';

export interface difficultySelectProps {
  options: string[];
  levelSelected?: string
  onDifficultyChange: (value: string) => void
}

export default function DifficultySelect({
  options,
  levelSelected = '',
  onDifficultyChange,
}: difficultySelectProps) {
  return (
    <Select
      defaultValue={options[0]}
      value={levelSelected}
      onChange={(event) => onDifficultyChange(event.target.value)}
      maxW={'200px'}
    >
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </Select>
  );
}
