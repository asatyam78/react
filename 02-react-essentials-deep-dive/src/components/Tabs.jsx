export default function Tabs({ children, buttons, buttonsContainer= "menu" }) {
  // To use dynamic component type it needs to be in caps. We can pass Caps directly while calling.
  const ButtonContainer = buttonsContainer;
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}
