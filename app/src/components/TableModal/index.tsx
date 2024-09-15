import React, { useState } from "react";
import { Modal, Platform, TouchableOpacity } from "react-native";
import { Button } from "../Button";
import { Close } from "../Icons/Close";
import { Text } from "../Text";
import { Form, Header, Input, ModalBody, Overlay } from "./styles";

interface TableModalProps {
  visible: boolean;
  onClose(): void;
  onSave(table: string): void;
}

export function TableModal({ visible, onClose, onSave }: TableModalProps) {
  const [tableNumber, setTableNumber] = useState<string>("");

  function handleSaveTable() {
    onSave(tableNumber);
    onClose();
  }

  return (
    <Modal transparent visible={visible} animationType="fade">
      <Overlay behavior={Platform.OS === "android" ? "height" : "padding"}>
        <ModalBody>
          <Header>
            <Text weight="600">Informe a mesa</Text>
            <TouchableOpacity onPress={onClose}>
              <Close color="#666" />
            </TouchableOpacity>
          </Header>
          <Form>
            <Input
              placeholder="Número da mesa"
              placeholderTextColor="#666"
              keyboardType="number-pad"
              onChangeText={setTableNumber}
            />

            <Button
              onPress={handleSaveTable}
              disabled={tableNumber?.length === 0}
            >
              Salvar
            </Button>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
