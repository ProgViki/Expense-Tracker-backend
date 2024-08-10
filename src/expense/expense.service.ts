import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Expense, Prisma } from '@prisma/client';




@Injectable()
export class ExpenseService {
  constructor(private prisma: PrismaService) {}

  async createExpense(data: Prisma.ExpenseCreateInput): Promise<Expense> {
    return this.prisma.expense.create({
      data,
    });
  }

  async findAll(): Promise<Expense[]> {
    return this.prisma.expense.findMany();
  }

  async findOne(id: number): Promise<Expense | null> {
    return this.prisma.expense.findUnique({
      where: { id },
    });
  }

  async updateExpense(id: number, data: Prisma.ExpenseUpdateInput): Promise<Expense> {
    return this.prisma.expense.update({
      where: { id },
      data,
    });
  }

  async removeExpense(id: number): Promise<void> {
    await this.prisma.expense.delete({
      where: { id },
    });
  }
}