import React from "react";
import { DrawnTag } from "../atoms/DrawnTag";
import { state } from "../../utils";
import { Controller, useForm } from "react-hook-form";
import { TextField } from "../atoms";

export const FormSection = () => {
  const {
    register,
    watch,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      betAmount: "",
      profitOnWin: "",
      targetMultiplier: "",
      winChance: "",
    },
  });

  const betAmount = watch("betAmount", 0);
  const targetMultiplier = watch("targetMultiplier", 0);

  const profitOnWin = betAmount * targetMultiplier;

  const winChance =
    targetMultiplier >= 1.01
      ? targetMultiplier <= 10
        ? 100 - targetMultiplier
        : 0
      : 0;

  const onSubmit = (data) => {
    console.log(data);
  };

  const decimalCheck = (value) => {
    const decimalPlace = 2;
    const regex = new RegExp(`^\\d+(\\.\\d{1,${decimalPlace}})?$`);
    return regex.test(value);
  };

  return (
    <div className="flex flex-col w-3/6 bg-background2 rounded-2xl p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex flex-row gap-5">
          <Controller
            name="betAmount"
            control={control}
            defaultValue=""
            rules={{ required: "Bet amount is required." }}
            render={({ field }) => (
              <TextField
                type="text"
                {...field}
                placeholder="Enter bet amount"
                label="Bet Amount"
                errors={errors.betAmount}
              />
            )}
          />
          <TextField
            type="text"
            value={profitOnWin.toFixed(2)}
            placeholder="0.0000000000"
            readOnly
            label="Profit on Win"
          />
        </div>
        <div>
          <Controller
            name="targetMultiplier"
            control={control}
            defaultValue=""
            rules={{ required: "Target multiplier is required." }}
            render={({ field }) => (
              <TextField
                type="text"
                {...field}
                placeholder="0.0000000000"
                label="Target Multiplier"
                errors={errors.targetMultiplier}
              />
            )}
          />
        </div>
        <div>
          <TextField
            type="text"
            value={winChance.toFixed(2)}
            placeholder="0.0000000000"
            readOnly
            label="Win Chance"
          />
        </div>
        <button
          type="submit"
          class="py-2 px-4 mt-3 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg active:bg-indigo-800 "
        >
          Bet
        </button>
      </form>
    </div>
  );
};
