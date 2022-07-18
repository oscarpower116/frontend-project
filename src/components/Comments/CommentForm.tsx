import { FC, useCallback } from "react";
import { Block, Elem } from "../../utils/bem";
import { ReactComponent as IconSend } from "../../assets/icons/send.svg";

import "./CommentForm.styl";
import { TextArea } from "../../common/TextArea/TextArea";


export type CommentFormProps = {
  value?: string,
  onChange?: (value: string) => void,
  onInput?: (value: string) => void,
  inline?: boolean,
  rows?: number,
  maxRows?: number,
}

export const CommentForm: FC<CommentFormProps> = ({
  value = "", 
  inline,
  onChange,
  onInput,
  rows = 1,
  maxRows = 3,
}) => {
  const onSubmit = useCallback((e: any) => {
    e.preventDefault();
  }, []);

  return (
    <Block tag="form" name="comment-form" mod={{ inline }} onSubmit={onSubmit}> 
      <TextArea value={value} rows={rows} maxRows={maxRows} onChange={onChange} onInput={onInput} inlineAction={inline} />
      <Elem tag="div" name="primary-action">
        <button type="submit">
          <IconSend />
        </button>
      </Elem>
    </Block>
  );
};