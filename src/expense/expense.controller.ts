import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { Expense } from '@prisma/client';

@Controller('expenses')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Post()
  create(@Body() createExpenseDto: Partial<Expense>): Promise<Expense> {
    return this.expenseService.createExpense(createExpenseDto);
  }

  @Get()
  findAll(): Promise<Expense[]> {
    return this.expenseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Expense | null> {
    return this.expenseService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateExpenseDto: Partial<Expense>): Promise<Expense> {
    return this.expenseService.updateExpense(id, updateExpenseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.expenseService.removeExpense(id);
  }
}