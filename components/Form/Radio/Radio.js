import {
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
} from '@mui/material';
import { useField } from 'formik';

const FormikRadioGroup = ({ name, options, guestName, ...rest }) => {
  const [field, meta] = useField(name);

  const config = {
    ...field,
    ...rest,
  };

  return (
    <FormControl>
      <FormLabel sx={{ marginBottom: '1rem', fontWeight: 'bolder' }}>
        Will {guestName} be celebrating with us?
      </FormLabel>
      <RadioGroup {...config}>
        {options.map((opt) => (
          <FormControlLabel
            key={opt.value}
            value={opt.value}
            label={opt.label}
            control={<Radio />}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default FormikRadioGroup;
